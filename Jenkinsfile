pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''cd my-app-ui
docker-compose down && docker-compose up --force-recreate --build'''
      }
    }
  }
}