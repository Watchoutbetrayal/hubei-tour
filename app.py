from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# 读取景点数据文件
def load_data():
    with open('scenic_spots.json', 'r', encoding='utf-8') as f:
        return json.load(f)

@app.route('/spots', methods=['GET'])
def get_spots():
    data = load_data()
    # 只返回城市和景点名称
    result = [{"city": spot["city"], "name": spot["name"]} for spot in data]
    return jsonify(result)

@app.route('/search', methods=['GET'])
def search_spots():
    keyword = request.args.get('keyword', '').strip()
    data = load_data()
    if not keyword:
        return jsonify([])  # 关键词空，返回空列表

    results = []
    for spot in data:
        if keyword in spot["name"] or keyword in spot["city"]:
            results.append({"city": spot["city"], "name": spot["name"]})
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
