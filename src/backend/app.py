# File: app.py

from flask import Flask, jsonify

from api.home_routes import home_api_bp
from utils.error_handling import handle_internal_server_error
from utils.logging_config import configure_logging


def create_app():

    app = Flask(__name__)

    # Configure logging
    configure_logging(app)

    # Register error handlers
    app.register_error_handler(Exception, handle_internal_server_error)

    app.logger.info("Starting Chat Completions API")

    # Register the home_api_bp blueprint
    app.register_blueprint(home_api_bp, name='home_route_direct')
    app.register_blueprint(home_api_bp, url_prefix='/api')

    return app


# # Create the app and run it during development (.\app.py)
if __name__ == "__main__":
    print("Starting Python Flask Server For Chat Completions API")
    app = create_app()
    app.run(host='0.0.0.0', port=5009, debug=True)  # During development

# # For production deployment, comment out the above lines and use the one below (Flask run)
# # This can also be used for development while running the app from Debug mode in VS Code
# print("Starting Python Flask Server For Chat Completions API using Flask run")
# app = create_app()
# app.run()  # In production
