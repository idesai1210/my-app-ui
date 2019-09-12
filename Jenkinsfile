pipeline {
  agent any
  stages {
    stage('Clean up') {
      steps {
        sh 'sudo docker ps -qa | sudo xargs docker rm'
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --force-recreate --build -d'
      }
    }
  }
}