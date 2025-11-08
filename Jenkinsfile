pipeline {
    agent any
    environment {
        IMAGE_NAME = "jenkins-demo"
        CONTAINER_NAME = "jenkins-demo-container"
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/BlackAdolph21/jenkins-test.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
        stage('Stop Old Container') {
            steps {
                echo 'Stopping old container if it exists...'
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
            }
        }
        stage('Free Port 3000') {
            steps {
                echo 'Killing any process using port 3000...'
                sh 'sudo lsof -ti :3000 | xargs -r sudo kill || true'
            }
        }
        stage('Run New Container') {
            steps {
                echo 'Running new container...'
                sh 'docker run -d -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }
}
