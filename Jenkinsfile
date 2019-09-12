pipeline {
  agent any
  stages {
    stage('Clean Up') {
      steps {
        sh '''sudo docker rm -v $(sudo docker ps -aq -f \'status=exited\')
if [ "$(docker images -f "dangling=true" -q | awk \'{print $3}\' | sort -u)x" != "x" ]
then
       docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
fi
sudo docker volume rm $(sudo docker volume ls -q -f \'dangling=true\')'''
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --build -d'
      }
    }
  }
}