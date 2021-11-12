from flask import Flask, render_template

app = Flask(__name__, template_folder='template')

@app.route("/")
def _main():
    return render_template("index.html.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0",port=3000)