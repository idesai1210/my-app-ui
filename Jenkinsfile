pipeline {
  agent any
  stages {
    stage('Clean Up') {
      steps {
        sh '''sudo docker rm -v $(docker ps -aq -f \'status=exited\')
sudo docker rmi $(docker images -aq -f \'dangling=true\')
sudo docker volume rm $(docker volume ls -q -f \'dangling=true\')'''
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --build -d'
      }
    }
  }
}