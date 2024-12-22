@echo off
setlocal enabledelayedexpansion

rem 定义目标域名
set domain=ip.sb

rem 获取目标域名的IPv4地址
for /f "tokens=2 delims=[]" %%i in ('ping -n 1 %domain% ^| findstr /i "Ping"') do (
    set "ip=%%i"
)

rem 分割 IP 地址
for /f "tokens=1,2,3,4 delims=." %%a in ("%ip%") do (
    set "first=%%a"
    set "second=%%b"
    set "third=%%c"
    set "last=%%d"
)

rem 生成IP地址列表，范围扩大到-20到20
set ip_list=
for /l %%i in (-20,1,20) do (
    set /a "newLast=!last! + %%i"
    if !newLast! gtr 0 if !newLast! leq 255 (
        set "ip_list=!ip_list! !first!.!second!.!third!.!newLast!"
    )
)

rem 初始化最终结果文件
set output_file=ip.sb.txt
echo. > %output_file%

rem 逐个ping IP地址并记录响应
for %%i in (%ip_list%) do (
    ping -n 1 %%i > nul
    echo %%i >> %output_file%
)

rem 保留最终的100个IP地址
sort %output_file% /o %output_file%
set /a count=0
for /f %%i in (%output_file%) do (
    echo %%i >> %output_file%
    set /a count+=1
    if !count! geq 100 goto done
)

:done
echo 完成! 结果已保存至 %output_file%.
pause
endlocal
