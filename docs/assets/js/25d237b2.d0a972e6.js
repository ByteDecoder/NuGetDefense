"use strict";(self.webpackChunknugetdefense_docs=self.webpackChunknugetdefense_docs||[]).push([[241],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(n),h=i,v=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],c={title:"NuGetDefense.Lib"},s="Summary",o={unversionedId:"API Reference/NuGetDefense.Lib",id:"API Reference/NuGetDefense.Lib",title:"NuGetDefense.Lib",description:"NuGetDefense.Lib provides programmatic access to all the features of NuGetDefense. The main use is in the Scanner.Scan method which returns the number of vulnerabilities found.",source:"@site/docs/API Reference/NuGetDefense.Lib.md",sourceDirName:"API Reference",slug:"/API Reference/NuGetDefense.Lib",permalink:"/NuGetDefense/docs/API Reference/NuGetDefense.Lib",editUrl:"https://github.com/digitalcoyote/NuGetDefenseDocs/tree/master/docs/API Reference/NuGetDefense.Lib.md",tags:[],version:"current",frontMatter:{title:"NuGetDefense.Lib"},sidebar:"tutorialSidebar",previous:{title:"CLI Reference",permalink:"/NuGetDefense/docs/cli-reference"},next:{title:"NuGetDefense.NVD",permalink:"/NuGetDefense/docs/API Reference/NuGetDefense.NVD"}},u={},d=[{value:"Scanner",id:"scanner",level:2},{value:"Scan(Scanoptions)",id:"scanscanoptions",level:3},{value:"GetNonSensitivePackages(out Dictionary&lt;string, NuGetPackage[]&gt;)",id:"getnonsensitivepackagesout-dictionarystring-nugetpackage",level:3},{value:"ScanOptions",id:"scanoptions",level:2},{value:"Cache",id:"cache",level:3},{value:"CheckReferencedProjects",id:"checkreferencedprojects",level:3},{value:"CheckTransitiveDependencies",id:"checktransitivedependencies",level:3},{value:"IgnoreCves",id:"ignorecves",level:3},{value:"IgnorePackages",id:"ignorepackages",level:3},{value:"ProjectFile",id:"projectfile",level:3},{value:"SettingsFile",id:"settingsfile",level:3},{value:"Tfm",id:"tfm",level:3},{value:"VulnDataFile",id:"vulndatafile",level:3},{value:"WarnOnly",id:"warnonly",level:3},{value:"NuGetPackage",id:"nugetpackage",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Id",id:"id",level:3},{value:"Version",id:"version",level:3},{value:"PackageUrl",id:"packageurl",level:3},{value:"VulnerabilityCache",id:"vulnerabilitycache",level:2},{value:"GetUncachedPackagesFunc",id:"getuncachedpackagesfunc",level:3},{value:"GetPackageCachedVulnerabilitiesForSource",id:"getpackagecachedvulnerabilitiesforsource",level:3},{value:"UpdateCache",id:"updatecache",level:3},{value:"GetSqliteCache",id:"getsqlitecache",level:3},{value:"VulnerabilityReport",id:"vulnerabilityreport",level:2},{value:"VulnerabilitiesCount",id:"vulnerabilitiescount",level:3},{value:"Packages",id:"packages",level:3},{value:"VulnerableNuGetPackage",id:"vulnerablenugetpackage",level:2},{value:"Id",id:"id-1",level:3},{value:"PackageUrl",id:"packageurl-1",level:3},{value:"Version",id:"version-1",level:3},{value:"Vulnerabilities",id:"vulnerabilities",level:3},{value:"ReportedVulnerability",id:"reportedvulnerability",level:2},{value:"Description",id:"description",level:3},{value:"Cve",id:"cve",level:3},{value:"Cwe",id:"cwe",level:3},{value:"CvssScore",id:"cvssscore",level:3},{value:"CvssVector",id:"cvssvector",level:3}],p={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"NuGetDefense.Lib provides programmatic access to all the features of NuGetDefense. The main use is in the Scanner.Scan method which returns the number of vulnerabilities found."),(0,r.kt)("h2",{id:"scanner"},"Scanner"),(0,r.kt)("h3",{id:"scanscanoptions"},"Scan(Scanoptions)"),(0,r.kt)("p",null,"Scan is the main method and performs the same scan as NuGetDefense"),(0,r.kt)("h3",{id:"getnonsensitivepackagesout-dictionarystring-nugetpackage"},"GetNonSensitivePackages(out Dictionary<string, NuGetPackage[]>)"),(0,r.kt)("p",null,"Reads SensitivePackages in Settings and escapes all characters for Regex, then replaces ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," with ",(0,r.kt)("inlineCode",{parentName:"p"},".*")," (Regex wild Card for 0 or more of any character). Then returns a list of packages that do not match the wild card strings in SensitivePackages."),(0,r.kt)("h2",{id:"scanoptions"},"ScanOptions"),(0,r.kt)("h3",{id:"cache"},"Cache"),(0,r.kt)("p",null,"Currently, this only accepts a SqlLiteVulnerabilityCache (with ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Enabled"),") fields. Future versions will include a Type field to support non-local caches."),(0,r.kt)("h3",{id:"checkreferencedprojects"},"CheckReferencedProjects"),(0,r.kt)("p",null,"Boolean used to determine if project referenced are scanned"),(0,r.kt)("h3",{id:"checktransitivedependencies"},"CheckTransitiveDependencies"),(0,r.kt)("p",null,"Boolean used to determine if nuget should be used to resolve transitive dependencies"),(0,r.kt)("h3",{id:"ignorecves"},"IgnoreCves"),(0,r.kt)("p",null,"Ignores specific vulnerabilities found in this set when reporting them. CVEs are generally the ID for vulnerabilities, but any ID returned by NuGetDefense will work here."),(0,r.kt)("h3",{id:"ignorepackages"},"IgnorePackages"),(0,r.kt)("p",null,"Ignores specific package id's to ignore."),(0,r.kt)("h3",{id:"projectfile"},"ProjectFile"),(0,r.kt)("p",null,"File used to obtain dependency info."),(0,r.kt)("h3",{id:"settingsfile"},"SettingsFile"),(0,r.kt)("p",null,"Allows loading a NuGetDefense config file"),(0,r.kt)("h3",{id:"tfm"},"Tfm"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/standard/frameworks#supported-target-frameworks"},"TFM or Target Framework Moniker")," provided to nuget when getting transitive dependencies."),(0,r.kt)("h3",{id:"vulndatafile"},"VulnDataFile"),(0,r.kt)("p",null,"The File used to store/retrieve NVD Data"),(0,r.kt)("h3",{id:"warnonly"},"WarnOnly"),(0,r.kt)("p",null,"If True, only emits warnings"),(0,r.kt)("h2",{id:"nugetpackage"},"NuGetPackage"),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"Array of strings that represent the dependencies of this package"),(0,r.kt)("h3",{id:"id"},"Id"),(0,r.kt)("p",null,"This is the Id defined in the nuspec file and used in package references and the package.json"),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,"Package version"),(0,r.kt)("h3",{id:"packageurl"},"PackageUrl"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/package-url/purl-spec"},"package url spec")," is a representation of the package ecosystem, ID, and string used to disambiguate this package from similarly named packages in other ecosystems"),(0,r.kt)("h2",{id:"vulnerabilitycache"},"VulnerabilityCache"),(0,r.kt)("p",null,"The workhorse of the cache."),(0,r.kt)("h3",{id:"getuncachedpackagesfunc"},"GetUncachedPackagesFunc"),(0,r.kt)("p",null,"Once set, this function spits out an array of packages that need to be checked."),(0,r.kt)("h3",{id:"getpackagecachedvulnerabilitiesforsource"},"GetPackageCachedVulnerabilitiesForSource"),(0,r.kt)("p",null,"Once set this function returns an array of cached vulnerabilities"),(0,r.kt)("h3",{id:"updatecache"},"UpdateCache"),(0,r.kt)("p",null,"Once set this function updates the cache with the results of a scan"),(0,r.kt)("h3",{id:"getsqlitecache"},"GetSqliteCache"),(0,r.kt)("p",null,"This is a static method that creates a new sqlite cache"),(0,r.kt)("h2",{id:"vulnerabilityreport"},"VulnerabilityReport"),(0,r.kt)("p",null,"Reporting object used to gather data for reporting."),(0,r.kt)("h3",{id:"vulnerabilitiescount"},"VulnerabilitiesCount"),(0,r.kt)("p",null,"Number of vulnerabilities reported"),(0,r.kt)("h3",{id:"packages"},"Packages"),(0,r.kt)("p",null,"Array of VulnerableNuGetPackage containing vulnerable packages and vulnerability details"),(0,r.kt)("h2",{id:"vulnerablenugetpackage"},"VulnerableNuGetPackage"),(0,r.kt)("h3",{id:"id-1"},"Id"),(0,r.kt)("p",null,"ID of the vulnerable nuget package"),(0,r.kt)("h3",{id:"packageurl-1"},"PackageUrl"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/package-url/purl-spec"},"package url spec")," is a representation of the package ecosystem, ID, and string used to disambiguate this package from similarly named packages in other ecosystems"),(0,r.kt)("h3",{id:"version-1"},"Version"),(0,r.kt)("p",null,"Version of the vulnerable package"),(0,r.kt)("h3",{id:"vulnerabilities"},"Vulnerabilities"),(0,r.kt)("p",null,"Array of ReportedVulnerability. Contains data about reported vulberabilities for this package"),(0,r.kt)("h2",{id:"reportedvulnerability"},"ReportedVulnerability"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Description of the vulnerability. Usually enough to assess the risk."),(0,r.kt)("h3",{id:"cve"},"Cve"),(0,r.kt)("p",null,"ID of the vulnerability"),(0,r.kt)("h3",{id:"cwe"},"Cwe"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cwe.mitre.org/index.html"},"Common Weakness Enumeration")),(0,r.kt)("h3",{id:"cvssscore"},"CvssScore"),(0,r.kt)("p",null,"Severity score. Generally the higher the number the worse."),(0,r.kt)("h3",{id:"cvssvector"},"CvssVector"),(0,r.kt)("p",null,"Access Vector of the vulnerability."))}h.isMDXComponent=!0}}]);