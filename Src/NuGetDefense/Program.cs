using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using NuGet.Versioning;
using NuGetDefense.Configuration;
using NuGetDefense.Core;
using NuGetDefense.OSSIndex;

namespace NuGetDefense
{
    internal class Program
    {
        private static string _nuGetFile;
        private const string UserAgentString = @"NuGetDefense/1.0.8.0-beta (https://github.com/digitalcoyote/NuGetDefense/blob/master/README.md)";
        private static NuGetPackage[] _pkgs;
        private static Settings _settings;

        /// <summary>
        ///     args[0] is expected to be the path to the project file.
        /// </summary>
        /// <param name="args"></param>
        private static void Main(string[] args)
        {
            var nugetFile = new NuGetFile();
            _nuGetFile = nugetFile.Path;
            _settings = Settings.LoadSettings(Path.GetDirectoryName(args[0]));
            _pkgs = nugetFile.LoadPackages(args[0], _settings.CheckTransitiveDependencies).Values.ToArray();
            if (_settings.ErrorSettings.BlackListedPackages.Length > 0) CheckForBlacklistedPackages();
            if (_settings.ErrorSettings.WhiteListedPackages.Length > 0)
                foreach (var pkg in _pkgs.Where(p => !_settings.ErrorSettings.WhiteListedPackages.Any(b =>
                    b.Id == p.Id && VersionRange.Parse(p.Version).Satisfies(new NuGetVersion(b.Version)))))
                    Console.WriteLine(
                        $"{_nuGetFile}({pkg.LineNumber},{pkg.LinePosition}) : Error : {pkg.Id} has not been whitelisted and may not be used in this project");
            Dictionary<string, Dictionary<string, Vulnerability>> vulnDict = null;
            if (_settings.OssIndex.Enabled)
                vulnDict =
                    new Scanner(_nuGetFile, _settings.OssIndex.BreakIfCannotRun, UserAgentString).GetVulnerabilitiesForPackages(_pkgs);
            if (_settings.NVD.Enabled)
                vulnDict =
                    new NVD.Scanner(_nuGetFile, TimeSpan.FromSeconds(_settings.NVD.TimeoutInSeconds),
                            _settings.NVD.BreakIfCannotRun, _settings.NVD.SelfUpdate)
                        .GetVulnerabilitiesForPackages(_pkgs,
                            vulnDict);
            if (_settings.ErrorSettings.IgnoredCvEs.Length > 0) VulnerabilityData.IgnoreCVEs(vulnDict, _settings.ErrorSettings.IgnoredCvEs);
            if (vulnDict != null)
                VulnerabilityReports.ReportVulnerabilities(vulnDict, _pkgs, _nuGetFile, _settings.WarnOnly,
                    _settings.ErrorSettings.CVSS3Threshold);
        }

        private static void CheckForBlacklistedPackages()
        {
            foreach (var pkg in _pkgs)
            {
                var blacklistedPackage = _settings.ErrorSettings.BlackListedPackages.FirstOrDefault(b =>
                    b.Package.Id == pkg.Id &&
                    VersionRange.Parse(pkg.Version).Satisfies(new NuGetVersion(b.Package.Version)));
                if (blacklistedPackage != null)
                    Console.WriteLine(
                        $"{_nuGetFile}({pkg.LineNumber},{pkg.LinePosition}) : Error : {pkg.Id} : {(string.IsNullOrEmpty(blacklistedPackage.CustomErrorMessage) ? blacklistedPackage.CustomErrorMessage : "has been blacklisted and may not be used in this project")}");
            }
        }
    }
}