pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker-compose down && docker-compose up --force-recreate --build'
      }
    }
  }
}