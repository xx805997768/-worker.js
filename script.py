import time
import random
import socket
import ipaddress
import csv
from concurrent.futures import ThreadPoolExecutor, as_completed

# Cloudflare的IPv4 IP段
cloudflare_ips = [
    "104.16.0.0/13",
    "104.24.0.0/14",
    "172.64.0.0/13",
    "131.0.72.0/22"
]

def ip_range(ip_cidr):
    """
    根据CIDR格式生成IP范围
    """
    network = ipaddress.IPv4Network(ip_cidr, strict=False)
    return [str(ip) for ip in network]

def check_latency(ip):
    """
    测试IP的延迟
    """
    try:
        start_time = time.time()
        socket.create_connection((ip, 80), timeout=1)
        return time.time() - start_time
    except:
        return float("inf")

def scan_ips(ips):
    """
    扫描一组IP地址，返回测试结果
    """
    results = []
    with ThreadPoolExecutor(max_workers=16) as executor:  # 使用16个线程
        future_to_ip = {executor.submit(check_latency, ip): ip for ip in ips}
        for future in as_completed(future_to_ip):
            ip = future_to_ip[future]
            try:
                latency = future.result()
                if latency < float("inf"):  # 如果IP可达
                    results.append((ip, latency))
                print(f"{ip}: {latency:.2f}秒")
            except Exception as e:
                print(f"{ip} 失败 - {e}")
    return results

def main():
    results = []
    print("开始从每个IP段随机选择50个IP进行多线程扫描...")

    for cidr in cloudflare_ips:
        print(f"扫描IP段: {cidr}")
        ips_in_segment = ip_range(cidr)
        sampled_ips = random.sample(ips_in_segment, min(50, len(ips_in_segment)))  # 随机选取50个IP
        results.extend(scan_ips(sampled_ips))

    # 按延迟从低到高排序并选取前20个
    results.sort(key=lambda x: x[1])
    fastest_ips = results[:20]

    print("\n最快的20个IP：")
    for ip, latency in fastest_ips:
        print(f"{ip} - 延迟: {latency:.2f}秒")

    # 保存到CSV文件
    output_path = "/data/data/com.termux/files/home/fastest_ips.csv"
    with open(output_path, "w", newline="") as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(["IP地址", "延迟（秒）"])
        for ip, latency in fastest_ips:
            writer.writerow([ip, f"{latency:.2f}"])

    print(f"\n结果已保存到 {output_path} 文件中。")

if __name__ == "__main__":
    main()
