pipeline {
    agent any
    environment {
        DEPLOY_DIR = '/var/www/jenkins-demo'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the app...'
                sh '''
                    sudo mkdir -p $DEPLOY_DIR
                    sudo cp -r * $DEPLOY_DIR/
                    sudo pkill node || true
                    nohup node $DEPLOY_DIR/server.js > app.log 2>&1 &
                '''
            }
        }
    }
}
