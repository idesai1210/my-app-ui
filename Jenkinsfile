pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up -d'
      }
    }
  }
}