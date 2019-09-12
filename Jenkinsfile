pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''whoami
sudo docker-compose down && sudo docker-compose up --force-recreate --build'''
      }
    }
  }
}