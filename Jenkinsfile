pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker ps -qa | xargs docker stop && sudo docker-compose down && sudo docker-compose up -d'
      }
    }
  }
}