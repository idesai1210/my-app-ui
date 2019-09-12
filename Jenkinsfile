pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''sudo docker rm $(sudo docker ps -q -f \'status=exited\')
sudo docker rmi $(sudo docker images -q -f "dangling=true")
sudo docker volume rm $(sudo docker volume ls -qf dangling=true)'''
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --force-recreate --build -d'
      }
    }
  }
}