pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'sudo -t docker-compose down && sudo -t docker-compose up --force-recreate --build'
      }
    }
  }
}