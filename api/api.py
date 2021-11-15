from flask import Flask;
import time
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

#shows in console
class Quotes(Resource):
  def get(self):
    return {
            'William Shakespeare': {
                'quote': ['Love all,trust a few,do wrong to none',
                'Some are born great, some achieve greatness, and some greatness thrust upon them.']
        },
        'Linus': {
            'quote': ['Talk is cheap. Show me the code.']
            }
        }

api.add_resource(Quotes, '/')

if __name__ == '__main__':
  app.run(debug=true)

@app.route('/api/time')
def get_current_time():
  return {'time': time.time()}