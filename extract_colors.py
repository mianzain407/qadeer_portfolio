import re
import urllib.request
from collections import Counter

try:
    url = "https://profdrjaved.com/"
    headers = {'User-Agent': 'Mozilla/5.0'}
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8', errors='ignore')

    # Find all hex codes
    hex_codes = re.findall(r'#[0-9a-fA-F]{6}', html)
    
    # Count frequencies
    common_colors = Counter(hex_codes).most_common(10)
    
    print("Top 10 Colors found:")
    for color, count in common_colors:
        print(f"{color}: {count}")

except Exception as e:
    print(f"Error: {e}")
