(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{80:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"定时计划命令-crontab-的使用，解决-tomcat-日志定时清理问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定时计划命令-crontab-的使用，解决-tomcat-日志定时清理问题"}},[t._v("#")]),t._v(" 定时计划命令 crontab 的使用，解决 Tomcat 日志定时清理问题")]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("h3",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("p",[t._v("一个之前的项目，客户使用一年后，数据库执行SQL语句出现问题，报错"),s("code",[t._v("The table xxxx is full")]),t._v("，表空间满了。")]),t._v(" "),s("h3",{attrs:{id:"解决过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决过程"}},[t._v("#")]),t._v(" 解决过程")]),t._v(" "),s("p",[t._v("检查服务器，发现服务器磁盘满了，但是用户数据只有7GB左右，硬盘是40GB的。找到Tomcat日志占空间32GB，清理Tomcat日志后程序正常运行。")]),t._v(" "),s("h3",{attrs:{id:"完善"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完善"}},[t._v("#")]),t._v(" 完善")]),t._v(" "),s("p",[t._v("编写清理日志的bash脚本，并使用crontab定时一个月执行一次，清理本月之前的日志。保留本月日志以排查问题。")]),t._v(" "),s("h2",{attrs:{id:"详细过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细过程"}},[t._v("#")]),t._v(" 详细过程")]),t._v(" "),s("h3",{attrs:{id:"清理日志的脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清理日志的脚本"}},[t._v("#")]),t._v(" 清理日志的脚本")]),t._v(" "),s("p",[t._v("放在tomcat目录下的logs文件夹里即可。logs_path请自行替换。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/bin/bash")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("logs_path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/apache-tomcat-8.5.31/logs"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost.*.log"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost_access_log.*.txt"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"catalina.*.log"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"manager.*.log"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host-manager.*.log"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v(" -mtime +30 -name "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fileservice.log.*"')]),t._v(" -exec "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$logs_path")]),t._v("/catalina.out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h3",{attrs:{id:"crontab-的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crontab-的使用"}},[t._v("#")]),t._v(" crontab 的使用")]),t._v(" "),s("p",[t._v("执行"),s("code",[t._v("crontab -e")]),t._v("编辑定时任务，并添加"),s("code",[t._v("0 2 1 * * sh /usr/local/apache-tomcat-8.5.31/logs/clean.sh")]),t._v("。\n即定时执行clean.sh脚本，每月1日凌晨2点执行。具体含义请看详解。")]),t._v(" "),s("h2",{attrs:{id:"crontab命令详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#crontab命令详解"}},[t._v("#")]),t._v(" crontab命令详解")]),t._v(" "),s("p",[t._v("在Linux中，周期执行的任务一般由cron这个守护进程来处理[ps -ef|grep cron]。cron读取一个或多个配置文件，这些配置文件中包含了命令行及其调用时间。\ncron的配置文件称为“crontab”，是“cron table”的简写。")]),t._v(" "),s("h3",{attrs:{id:"一、cron服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、cron服务"}},[t._v("#")]),t._v(" 一、cron服务")]),t._v(" "),s("p",[t._v("cron是一个linux下 的定时执行工具，可以在无需人工干预的情况下运行作业。")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond start    //启动服务\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond stop     //关闭服务\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond restart  //重启服务\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond reload   //重新载入配置\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("service")]),t._v(" crond status   //查看服务状态 \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"二、cron配置文件的位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、cron配置文件的位置"}},[t._v("#")]),t._v(" 二、cron配置文件的位置")]),t._v(" "),s("p",[t._v("/var/spool/cron/crontabs/ 这个目录下存放的是每个用户包括root的crontab任务，每个任务以创建者的名字命名，比如tom建的crontab任务对应的文件就是/var/spool/cron/tom。一般一个用户最多只有一个crontab文件。")]),t._v(" "),s("h3",{attrs:{id:"三、crontab格式说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、crontab格式说明"}},[t._v("#")]),t._v(" 三、crontab格式说明")]),t._v(" "),s("p",[t._v("用户所建立的crontab文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令段，格式如下：\nminute hour day month week command"),s("br"),t._v("\n其中："),s("br"),t._v("\nminute： 表示分钟，可以是从0到59之间的任何整数。"),s("br"),t._v("\nhour：表示小时，可以是从0到23之间的任何整数。"),s("br"),t._v("\nday：表示日期，可以是从1到31之间的任何整数。"),s("br"),t._v("\nmonth：表示月份，可以是从1到12之间的任何整数。\nweek：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。"),s("br"),t._v("\ncommand：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。"),s("br"),t._v(" "),s("img",{attrs:{src:"/img/linux/1-1.png",alt:"crontab格式说明"}}),s("br"),t._v("\n在以上各个字段中，还可以使用以下特殊字符："),s("br"),t._v("\n星号（"),s("em",[t._v("）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。"),s("br"),t._v("\n逗号（,）：可以用逗号隔开的值指定一个列表范围，例如，“1,2,5,7,8,9”"),s("br"),t._v("\n中杠（-）：可以用整数之间的中杠表示一个整数范围，例如“2-6”表示“2,3,4,5,6”"),s("br"),t._v("\n正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如")]),t._v("/10，如果用在minute字段，表示每十分钟执行一次。")]),t._v(" "),s("h3",{attrs:{id:"四、crontab命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、crontab命令"}},[t._v("#")]),t._v(" 四、crontab命令")]),t._v(" "),s("h4",{attrs:{id:"_1-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式"}},[t._v("#")]),t._v(" 1.命令格式")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-u user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -e "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -l "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -r "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"_2．命令功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2．命令功能"}},[t._v("#")]),t._v(" 2．命令功能")]),t._v(" "),s("p",[t._v("通过crontab 命令，我们可以在固定的间隔时间执行指定的系统指令或 shell script脚本。时间间隔的单位可以是分钟、小时、日、月、周及以上的任意组合。这个命令非常设合周期性的日志分析或数据备份等工作。")]),t._v(" "),s("h4",{attrs:{id:"_3．命令参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3．命令参数"}},[t._v("#")]),t._v(" 3．命令参数")]),t._v(" "),s("p",[s("code",[t._v("-u user")]),t._v("：用来设定某个用户的crontab服务，例如，“-u ixdba”表示设定ixdba用户的crontab服务，此参数一般有root用户来运行。")]),t._v(" "),s("p",[s("code",[t._v("file")]),t._v("：file是命令文件的名字,表示将file做为crontab的任务列表文件并载入crontab。如果在命令行中没有指定这个文件，crontab命令将接受标准输入（键盘）上键入的命令，并将它们载入crontab。")]),t._v(" "),s("p",[s("code",[t._v("-e")]),t._v("：编辑某个用户的crontab文件内容。如果不指定用户，则表示编辑当前用户的crontab文件。")]),t._v(" "),s("p",[s("code",[t._v("-l")]),t._v("：显示某个用户的crontab文件内容，如果不指定用户，则表示显示当前用户的crontab文件内容。")]),t._v(" "),s("p",[s("code",[t._v("-r")]),t._v("：从/var/spool/cron目录中删除某个用户的crontab文件，如果不指定用户，则默认删除当前用户的crontab文件。")]),t._v(" "),s("p",[s("code",[t._v("-i")]),t._v("：在删除用户的crontab文件时给确认提示。")]),t._v(" "),s("h4",{attrs:{id:"_4-实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-实例"}},[t._v("#")]),t._v(" 4. 实例")]),t._v(" "),s("p",[t._v("实例1：每1分钟执行一次command"),s("br"),t._v("\n命令：\n"),s("code",[t._v("* * * * * command")])]),t._v(" "),s("p",[t._v("实例2：每小时的第3和第15分钟执行"),s("br"),t._v("\n命令：\n"),s("code",[t._v("3,15 * * * * command")])]),t._v(" "),s("p",[t._v("实例3：在上午8点到11点的第3和第15分钟执行"),s("br"),t._v("\n命令：\n"),s("code",[t._v("3,15 8-11 * * * command")])]),t._v(" "),s("p",[t._v("实例4：每隔两天的上午8点到11点的第3和第15分钟执行"),s("br"),t._v("\n命令：\n"),s("code",[t._v("3,15 8-11 */2 * * command")])]),t._v(" "),s("p",[t._v("实例5：每个星期一的上午8点到11点的第3和第15分钟执行"),s("br"),t._v("\n命令：\n"),s("code",[t._v("3,15 8-11 * * 1 command")])]),t._v(" "),s("p",[t._v("实例6：每晚的21:30重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("30 21 * * * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例7：每月1、10、22日的4 : 45重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("45 4 1,10,22 * * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例8：每周六、周日的1 : 10重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("10 1 * * 6,0 /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例9：每天18 : 00至23 : 00之间每隔30分钟重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("0,30 18-23 * * * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例10：每星期六的晚上11 : 00 pm重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("0 23 * * 6 /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例11：每一小时重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("* */1 * * * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例12：晚上11点到早上7点之间，每隔一小时重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("* 23-7/1 * * * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例13：每月的4号与每周一到周三的11点重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("0 11 4 * mon-wed /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例14：一月一号的4点重启smb"),s("br"),t._v("\n命令：\n"),s("code",[t._v("0 4 1 jan * /etc/init.d/smb restart")])]),t._v(" "),s("p",[t._v("实例15：每小时执行/etc/cron.hourly目录内的脚本"),s("br"),t._v("\n命令：\n"),s("code",[t._v("01 * * * * root run-parts /etc/cron.hourly")]),s("br"),t._v("\n说明：\nrun-parts这个参数了，如果去掉这个参数的话，后面就可以写要运行的某个脚本名，而不是目录名了")])])}),[],!1,null,null,null);a.default=r.exports}}]);