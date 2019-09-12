pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker rm $(docker ps -q -f \'status=exited\')'
      }
    }
  }
}