from flask import (Flask, render_template, redirect, request,
                   session, jsonify)


app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'


@app.route('/')
def homepage():

    

    return render_template("homepage.html")


if __name__ == '__main__':

    app.run(port=5000, host='0.0.0.0', debug=True)