pipeline {
  agent any
  stages {
    stage('Clean up') {
      steps {
        sh 'docker ps -qa | xargs docker rm'
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --force-recreate --build -d'
      }
    }
  }
}