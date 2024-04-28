// AVA GARDINER (46410961)

export {
    split_hash
  };
  
  // split_hash - GIVEN A HASH PATH LIKE '#!/thing/99'
  // RETURN AN OBJECT WITH PROPERTIES `path` ("thing") and `id` (99)
  
  function split_hash(hash) {
  
    const regex = "#!/([^/]*)/?(.*)?";
    const match = hash.match(regex);
    if (match) {
      return {
        path: match[1],
        id: match[2]
      }
    } else {
      return {
        path: ""
      }
    }
  }

