pipeline {
  agent any
  stages {
    stage('Setup') {
      steps {
        sh '''sudo docker rm $(docker ps -q -f \'status=exited\')
sudo docker rmi $(docker images -q -f "dangling=true")
sudo docker volume rm $(docker volume ls -qf dangling=true)'''
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --force-recreate --build -d'
      }
    }
  }
}