from flask import *
from flask_bootstrap import Bootstrap
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask('shop')
app.config['MONGO_URI']='mongodb://localhost:27017/shop-db'
mongo=PyMongo(app)
app.config['SECRET_KEY'] = "sOmE_rAnDom_woRd"
preferences = []

@app.route('/', methods=['GET','POST'])
def profile():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        document = {}
        for item in request.form:
            document[item]=request.form[item]
        mongo.db.products.insert_one(document)
        return redirect('/')