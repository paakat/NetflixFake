
DOCKER_BUILD() 
{
  echo "[DOCKER_BUILD] ..."
  docker build . --file ${DOCKERFILE} --tag ${IMAGE_NAME}  > /dev/null
  echo "[DOCKER_BUILD] DONE!"
}



DOCKER_RUN_DETACHED()
{
  echo "[DOCKER_RUN_DETACHED] ..."

  CONTAINER_ID=$(
     docker run \
        --detach \
        --rm \
        --publish 10000:80 \
        --name ${CONTAINER_NAME} \
        --interactive ${IMAGE_NAME} \
        ${TOBEEXECUTED}
  )

  docker ps -a
  echo "[DOCKER_RUN_DETACHED] DONE!"  
}


DOCKER_EXEC_IT()
{ 
  echo "[DOCKER_EXEC_IT] "
  echo docker exec --tty --interactive ${CONTAINER_NAME} sh  
}


DOCKER_STOP() 
{ 
  echo "[DOCKER_STOP] "
  echo docker stop ${CONTAINER_NAME}
}


DOCKERFILE=Dockerfile.fe  
IMAGE_NAME=frondend_image 
CONTAINER_NAME=frondend_container

time DOCKER_BUILD  
DOCKER_RUN_DETACHED
DOCKER_EXEC_IT
DOCKER_STOP

