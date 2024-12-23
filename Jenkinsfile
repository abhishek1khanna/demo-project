pipeline {
    agent any
    environment {
        DOCKER_IMAGE = "node-app"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/abhishek1khanna/demo-project.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE .'
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker stop node-container || true'
                    sh 'docker rm node-container || true'
                    sh 'docker run -d -p 3000:3000 --name node-container $DOCKER_IMAGE'
                }
            }
        }
    }
    post {
        always {
            echo "Pipeline execution completed!"
        }
    }
}
