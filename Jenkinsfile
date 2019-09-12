pipeline {
  agent any
  stages {
    stage('Clean Up') {
      steps {
        sh '''if [ "$(sudo docker ps -aq -f \'status=exited\'| awk \'{print $3}\' | sort -u)x" != "x" ]
then
     sudo docker rm -v $(sudo docker ps -aq -f \'status=exited\')

fi


if [ "$(sudo docker images -f "dangling=true" -q | awk \'{print $3}\' | sort -u)x" != "x" ]
then
       sudo docker rmi $(sudo docker images --filter "dangling=true" -q --no-trunc)
fi


if [ "$(sudo docker volume ls -q -f \'dangling=true\' | awk \'{print $3}\' | sort -u)x" != "x" ]
then
       sudo docker volume rm $(sudo docker volume ls -q -f \'dangling=true\')
fi

'''
      }
    }
    stage('Build') {
      steps {
        sh 'sudo docker-compose down && sudo docker-compose up --build -d'
      }
    }
  }
}