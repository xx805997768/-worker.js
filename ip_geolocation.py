import csv

# IP生成器函数
def generate_ip_range(base_ips, offset=10, count=50):
    generated_ips = []
    for ip in base_ips:
        parts = ip.split(".")
        for i in range(-offset, offset + 1):
            # 克隆原始IP
            new_ip_parts = parts.copy()
            # 偏移最后一部分
            new_part = int(parts[3]) + i
            if 0 <= new_part <= 255:  # 确保IP合法
                new_ip_parts[3] = str(new_part)
                generated_ips.append(".".join(new_ip_parts))
                if len(generated_ips) >= count:  # 达到计数后停止
                    break
        if len(generated_ips) >= count:
            break
    return generated_ips

# 基础IP列表
base_ips = [
    "172.67.158.74",
    "104.26.10.172",
    "104.26.3.180",
    "104.19.168.102",
    "104.18.176.190",
    "162.159.133.133",
    "162.159.135.87",
    "162.159.134.29",
    "162.159.209.175",
    "162.159.238.145",
    "172.67.9.77",
    "162.159.130.4",
    "104.18.115.50",
    "104.16.101.9",
    "162.159.129.153"
]

# 生成IP
generated_ips = generate_ip_range(base_ips, offset=10, count=50)

# 将生成的IP写入CSV文件
csv_filename = "generated_ips.csv"
with open(csv_filename, mode="w", newline="") as file:
    writer = csv.writer(file)
    writer.writerow(["Generated IPs"])  # 写入标题
    for ip in generated_ips:
        writer.writerow([ip])

print(f"生成的IP已保存至 {csv_filename}")
