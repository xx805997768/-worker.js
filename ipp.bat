@echo off
setlocal enabledelayedexpansion

:: 输出文件名
set output_file=generated_ips.txt
echo Generated IPs: > %output_file%

:: 定义基础IP列表
set ips=172.67.158.74 104.26.10.172 104.26.3.180 104.19.168.102 104.18.176.190 162.159.133.133 162.159.135.87 162.159.134.29 162.159.209.175 162.159.238.145 172.67.9.77 162.159.130.4 104.18.115.50 104.16.101.9 162.159.129.153

:: 遍历每个基础IP
for %%i in (%ips%) do (
    set "base_ip=%%i"
    for /f "tokens=1,2,3,4 delims=." %%a in ("!base_ip!") do (
        for /L %%j in (1,1,100) do (
            set /a random_last_octet=!random! %% 256
            set "new_ip=%%a.%%b.%%c.!random_last_octet!"
            findstr /x "!new_ip!" %output_file% >nul || (
                echo !new_ip! >> %output_file%
            )
        )
    )
)

echo 已成功生成所有随机IP，存储在 %output_file%.
