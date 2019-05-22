from flask import Flask, render_template

# Name Init
app = Flask(__name__)


# Some variables and dicts
data = [{
'words': ['hello', 'jump', 'kite'],
'numbers': [1,2,3,4]
}]



# Home Page
@app.route("/")
@app.route('/home')
def home():
    return render_template('home.html')

# About Page
@app.route("/about")
def about():
    return render_template('about.html')

# Contact Page
@app.route("/contact")
def contact():
    return render_template('contact.html')

# Python Tests
@app.route("/test")
def test():
    return render_template('test.html', data=data)

# Needed for standalone turn debug off for production
if __name__ == '__main__':
    app.run(debug=True)
