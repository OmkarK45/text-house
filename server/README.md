    server                                  client
  - on.'CREATE_ROOM'                       - Fire create room after user submits new room form 
    create room and save ID in DB
    with creator as ADMIN
    
  - on.'JOIN_ROOM'
    take user and roomID from user
    check if that roomID exists
    find that room,
    add that user in that ROOM
    socket ke room me bhi add and then
    emit everyone