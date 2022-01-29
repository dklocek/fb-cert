pipeline {
    agent any

    environment {
        TOKEN = credentials('FIREBASE_TOKEN')
    }
    stages {
        stage('Hello') {
            steps {
               sh 'echo ${TOKEN}'
               sh 'firebase deploy --only hosting --token ${TOKEN} --debug'
               sh 'cat firebase-debug.log'

             
            }
        }
    }
}