
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href=".html">[Global Namespace]</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:gfpdfe_business_plus" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="gfpdfe_business_plus.html">gfpdfe_business_plus</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:GFPDF" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF.html">GFPDF</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:GFPDF_Plugins" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins.html">Plugins</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit.html">DeveloperToolkit</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Cli" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Cli.html">Cli</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Cli_Commands" >                    <div style="padding-left:72px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html">Commands</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Cli_Commands_Cli" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html">Cli</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Cli_Commands_CreateTemplate" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html">CreateTemplate</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Cli_Commands_GetPdfStatus" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html">GetPdfStatus</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Cli_Commands_InterfaceCli" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html">InterfaceCli</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Cli_Register" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Cli/Register.html">Register</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Factory" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Factory.html">Factory</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Factory_FactoryWriter" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Factory/FactoryWriter.html">FactoryWriter</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Legacy" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Legacy.html">Legacy</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Legacy_AdvancedTemplate" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html">AdvancedTemplate</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Legacy_Deactivate" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html">Deactivate</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Legacy_LegacyLoader" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html">LegacyLoader</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Loader" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Loader.html">Loader</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Loader_Header" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Loader/Header.html">Header</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Loader_Javascript" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html">Javascript</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Loader_Loader" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html">Loader</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Writer" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Writer.html">Writer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:GFPDF_Plugins_DeveloperToolkit_Writer_Processes" >                    <div style="padding-left:72px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html">Processes</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Ellipse" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Ellipse.html">Ellipse</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Html" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Html.html">Html</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Import" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html">Import</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Multi" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html">Multi</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Single" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html">Single</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Styles" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html">Styles</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Processes_Tick" >                    <div style="padding-left:98px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html">Tick</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_AbstractWriter" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html">AbstractWriter</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_InterfaceWriter" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html">InterfaceWriter</a>                    </div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Writer_Writer" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html">Writer</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:GFPDF_Plugins_DeveloperToolkit_Bootstrap" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="GFPDF/Plugins/DeveloperToolkit/Bootstrap.html">Bootstrap</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": ".html", "name": "", "doc": "Namespace "},{"type": "Namespace", "link": "GFPDF.html", "name": "GFPDF", "doc": "Namespace GFPDF"},{"type": "Namespace", "link": "GFPDF/Plugins.html", "name": "GFPDF\\Plugins", "doc": "Namespace GFPDF\\Plugins"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit.html", "name": "GFPDF\\Plugins\\DeveloperToolkit", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Cli.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Cli"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Factory.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Factory", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Factory"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Legacy"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Loader.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Loader"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Writer.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Writer"},{"type": "Namespace", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "doc": "Namespace GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes"},
            {"type": "Interface", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "doc": "&quot;Interface InterfaceWriter&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_log", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::log", "doc": "&quot;Logs a message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_warning", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::warning", "doc": "&quot;Logs a warning message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_success", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::success", "doc": "&quot;Logs a success message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_error", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::error", "doc": "&quot;Logs an error&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_getResponse", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::getResponse", "doc": "&quot;Get a user response&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_outputInFormat", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::outputInFormat", "doc": "&quot;Output the data in a specific format&quot;"},
            
            {"type": "Interface", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "doc": "&quot;The Mpdf setter contract for use with our Writer classes&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html#method_setMpdf", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter::setMpdf", "doc": "&quot;Setter for our Mpdf class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html#method_isMpdfSet", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter::isMpdfSet", "doc": "&quot;Check if our Mpdf Setter has been run&quot;"},
            
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit", "fromLink": "GFPDF/Plugins/DeveloperToolkit.html", "link": "GFPDF/Plugins/DeveloperToolkit/Bootstrap.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Bootstrap", "doc": "&quot;Class to bootstrap the Gravity PDF Developer Toolkit plugin&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Bootstrap", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Bootstrap.html", "link": "GFPDF/Plugins/DeveloperToolkit/Bootstrap.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Bootstrap::init", "doc": "&quot;Initialise the plugin classes and pass them to our parent class which is included in the Gravity PDF plugin to\nhandle the rest of the bootstrapping (licensing ect)&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Bootstrap", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Bootstrap.html", "link": "GFPDF/Plugins/DeveloperToolkit/Bootstrap.html#method_plugin_updater", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Bootstrap::plugin_updater", "doc": "&quot;Check the plugin&#039;s license is active and initialise the EDD Updater&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "doc": "&quot;Class Cli&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_log", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::log", "doc": "&quot;Logs a message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_warning", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::warning", "doc": "&quot;Logs a warning message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_success", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::success", "doc": "&quot;Logs a success message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_error", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::error", "doc": "&quot;Logs an error&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_getResponse", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::getResponse", "doc": "&quot;Ask the CLI user a question and return their response&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/Cli.html#method_outputInFormat", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\Cli::outputInFormat", "doc": "&quot;Output the data in a specific format&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\CreateTemplate", "doc": "&quot;Processes the &lt;code&gt;wp gpdf create-template&lt;\/code&gt; WP CLI Command&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\CreateTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\CreateTemplate::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\CreateTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/CreateTemplate.html#method___invoke", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\CreateTemplate::__invoke", "doc": "&quot;Generates a PDF template in the PDF Working Directory&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus", "doc": "&quot;The Gravity PDF CLI Commands&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html#method_version", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus::version", "doc": "&quot;Get the current Gravity PDF Version&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/GetPdfStatus.html#method_status", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\GetPdfStatus::status", "doc": "&quot;Get the Gravity PDF System Status&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "doc": "&quot;Interface InterfaceWriter&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_log", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::log", "doc": "&quot;Logs a message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_warning", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::warning", "doc": "&quot;Logs a warning message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_success", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::success", "doc": "&quot;Logs a success message&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_error", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::error", "doc": "&quot;Logs an error&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_getResponse", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::getResponse", "doc": "&quot;Get a user response&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Commands/InterfaceCli.html#method_outputInFormat", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Commands\\InterfaceCli::outputInFormat", "doc": "&quot;Output the data in a specific format&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Register.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Register", "doc": "&quot;Registers our WP CLI Commands&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Register", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Cli/Register.html", "link": "GFPDF/Plugins/DeveloperToolkit/Cli/Register.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Cli\\Register::init", "doc": "&quot;Register our WP CLI Commands&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Factory", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Factory.html", "link": "GFPDF/Plugins/DeveloperToolkit/Factory/FactoryWriter.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Factory\\FactoryWriter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Factory\\FactoryWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Factory/FactoryWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Factory/FactoryWriter.html#method_build", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Factory\\FactoryWriter::build", "doc": "&quot;Initialise our PDF Writer object and inject all required writer classes automatically&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate", "doc": "&quot;Removes the Advanced Template option from the PDF settings if not upgrading from a legacy plugin&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate::__construct", "doc": "&quot;Deactivate constructor.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html#method_add_filters", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate::add_filters", "doc": "&quot;Add WordPress actions&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/AdvancedTemplate.html#method_modifyAdvancedTemplateField", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\AdvancedTemplate::modifyAdvancedTemplateField", "doc": "&quot;Checks if the legacy \&quot;Advanced Template\&quot; option should be shown in the PDF options&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate", "doc": "&quot;Detects if the Gravity PDF Tier 2 plugin is enabled and deactivates it automatically.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate::__construct", "doc": "&quot;Deactivate constructor.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html#method_add_actions", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate::add_actions", "doc": "&quot;Add WordPress actions&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/Deactivate.html#method_maybeDeactivateLegacyPlugin", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\Deactivate::maybeDeactivateLegacyPlugin", "doc": "&quot;Deactivate the Gravity PDF Tier 2 plugin (if it exists)&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "doc": "&quot;Detects when the legacy Advanced Template option is enabled, bypasses the PDF sandbox, and injects our Toolkit helper\nclasses and legacy variables automatically.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_add_filters", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::add_filters", "doc": "&quot;Add WordPress filters&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_add_actions", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::add_actions", "doc": "&quot;Add WordPress actions&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_maybeSkipPdfHtmlRender", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::maybeSkipPdfHtmlRender", "doc": "&quot;Check if the legacy setting is enabled and skip the sandbox&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_maybeAddLegacyTemplateArgs", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::maybeAddLegacyTemplateArgs", "doc": "&quot;Include variables needed for legacy templates&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Legacy/LegacyLoader.html#method_overloadMpdfClass", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Legacy\\LegacyLoader::overloadMpdfClass", "doc": "&quot;Overload the current Mpdf object being processed if template creates its own object&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "doc": "&quot;Adds support for our Toolkit header in PDF Templates.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header::__construct", "doc": "&quot;Header constructor.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html#method_add_filters", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header::add_filters", "doc": "&quot;Add WordPress filters&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html#method_addToolkitHeader", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header::addToolkitHeader", "doc": "&quot;Register a new PDF Template Header \&quot;Toolkit\&quot;&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Header.html#method_addToolkitSetting", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Header::addToolkitSetting", "doc": "&quot;If the current template is a Toolkit template, save that value into the settings&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "doc": "&quot;Adds support for our Toolkit Javascript in PDF Templates.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::__construct", "doc": "&quot;Javascript constructor.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method_add_actions", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::add_actions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method_registerAssets", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::registerAssets", "doc": "&quot;Register our plugin assets&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method_enqueueScripts", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::enqueueScripts", "doc": "&quot;Enqueue our JS on Gravity PDF pages&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Javascript.html#method_getTemplateHeader", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Javascript::getTemplateHeader", "doc": "&quot;AJAX endpoint to get current template file headers&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "doc": "&quot;Detects when the Toolkit header is included, bypasses the PDF sandbox and injects our Toolkit helper classes automatically.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html#method_init", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader::init", "doc": "&quot;Initialise class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html#method_add_filters", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader::add_filters", "doc": "&quot;Add WordPress filters&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html#method_add_actions", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader::add_actions", "doc": "&quot;Add WordPress actions&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html#method_maybeSkipPdfHtmlRender", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader::maybeSkipPdfHtmlRender", "doc": "&quot;Determine if the current template has the \&quot;Toolkit\&quot; header and skip the standard Mpdf HTML sandbox&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html", "link": "GFPDF/Plugins/DeveloperToolkit/Loader/Loader.html#method_handleToolkitTemplate", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Loader\\Loader::handleToolkitTemplate", "doc": "&quot;Loads the current PDF template and injects our Toolkit helper classes&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html#method_setMpdf", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter::setMpdf", "doc": "&quot;Our Mpdf Setter&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html#method_getMpdf", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter::getMpdf", "doc": "&quot;Get the current Mpdf object&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/AbstractWriter.html#method_isMpdfSet", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\AbstractWriter::isMpdfSet", "doc": "&quot;Determine if our Mpdf Setter has been run&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "doc": "&quot;The Mpdf setter contract for use with our Writer classes&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html#method_setMpdf", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter::setMpdf", "doc": "&quot;Setter for our Mpdf class&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/InterfaceWriter.html#method_isMpdfSet", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\InterfaceWriter::isMpdfSet", "doc": "&quot;Check if our Mpdf Setter has been run&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Ellipse.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Ellipse", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Ellipse", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Ellipse.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Ellipse.html#method_ellipse", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Ellipse::ellipse", "doc": "&quot;Adds an Ellipse to the PDF being rendered&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Html.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Html", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Html", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Html.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Html.html#method_addHtml", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Html::addHtml", "doc": "&quot;Add HTML directly to Mpdf using the current Mpdf Y pointer position&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html#method_addPdf", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import::addPdf", "doc": "&quot;Load a PDF with version 1.4 or 1.5 of the Adobe Spec for use with Mpdf.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html#method_addPage", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import::addPage", "doc": "&quot;Display a page, or range of pages, from the loaded PDF in the PDF being rendered&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html#method_addBlankPage", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import::addBlankPage", "doc": "&quot;Add a blank page to the PDF being rendered. Use in conjunction with &lt;code&gt;$w-&amp;gt;html()&lt;\/code&gt;.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html#method_getPdfPageSize", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import::getPdfPageSize", "doc": "&quot;Returns the current imported PDF page sizes (with &lt;code&gt;$w-&amp;gt;addPdf()&lt;\/code&gt;). The class handles the page sizes internally, so you shouldn&#039;t need to use this method in your templates.&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Import.html#method_getPdfPageIds", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Import::getPdfPageIds", "doc": "&quot;Returns the current loaded PDF page IDs. The class handles the IDs internally, so you shouldn&#039;t need to use this method in your templates.&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html#method_addMulti", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi::addMulti", "doc": "&quot;Add Multi-line content to the PDF&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html#method_addMultiCenter", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi::addMultiCenter", "doc": "&quot;Add Multi-line content to the PDF&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html#method_addMultiRight", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi::addMultiRight", "doc": "&quot;Add Multi-line content to the PDF&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html#method_configMulti", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi::configMulti", "doc": "&quot;Sets the new mult-line configuration&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Multi.html#method_getMultiConfig", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Multi::getMultiConfig", "doc": "&quot;Return the current Multi configuration values&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html#method_add", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single::add", "doc": "&quot;Add Single Line content to PDF&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html#method_addCenter", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single::addCenter", "doc": "&quot;Add Single Line content to PDF with center alignment&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Single.html#method_addRight", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Single::addRight", "doc": "&quot;Add Single Line content to PDF with right alignment&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Styles", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Styles", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html#method_beginStyles", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Styles::beginStyles", "doc": "&quot;Begin buffering output to capture the styles&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Styles", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Styles.html#method_endStyles", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Styles::endStyles", "doc": "&quot;Import our styles to the PDF generator.&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html#method_tick", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick::tick", "doc": "&quot;Adds a tick character to the PDF&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html#method_configTick", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick::configTick", "doc": "&quot;Sets the new tick configuration&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Processes/Tick.html#method_getTickConfig", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Processes\\Tick::getTickConfig", "doc": "&quot;Return the current Tick configuration values&quot;"},
            
            {"type": "Class", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer", "doc": "&quot;This class acts as a router for all public methods found in the GFPDF\\Plugins\\DeveloperToolkit\\Writer namespace.&quot;"},
                                                        {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html#method___construct", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer::__construct", "doc": "&quot;Register all classes on initialisation&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html#method_registerClass", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer::registerClass", "doc": "&quot;Register the class with the Writer&quot;"},
                    {"type": "Method", "fromName": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer", "fromLink": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html", "link": "GFPDF/Plugins/DeveloperToolkit/Writer/Writer.html#method___call", "name": "GFPDF\\Plugins\\DeveloperToolkit\\Writer\\Writer::__call", "doc": "&quot;Search through the registered classes for a public method match and call it with the passed arguments&quot;"},
            
            {"type": "Class",  "link": "gfpdfe_business_plus.html", "name": "gfpdfe_business_plus", "doc": "&quot;A legacy (deprecated) class included so Gravity PDF Developer Toolkit can be a drop-in replacement for the Gravity PDF Tier 2 add-on. &lt;b&gt;Don&#039;t use its methods for any new templates&lt;\/b&gt;.&quot;"},
                                                        {"type": "Method", "fromName": "gfpdfe_business_plus", "fromLink": "gfpdfe_business_plus.html", "link": "gfpdfe_business_plus.html#method_initilise", "name": "gfpdfe_business_plus::initilise", "doc": "&quot;Deprecated method to import a PDF and return the data&quot;"},
                    {"type": "Method", "fromName": "gfpdfe_business_plus", "fromLink": "gfpdfe_business_plus.html", "link": "gfpdfe_business_plus.html#method_add_template", "name": "gfpdfe_business_plus::add_template", "doc": "&quot;Deprecated method to import additional PDFs and return the data&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


