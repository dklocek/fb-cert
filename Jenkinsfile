pipeline {
    agent any

    environment {
        TOKEN = credentials('FIREBASE_TOKEN')
    }
    stages {
        stage('Hello') {
            steps {
               sh 'echo ${TOKEN}'
             
            }
        }
    }
}