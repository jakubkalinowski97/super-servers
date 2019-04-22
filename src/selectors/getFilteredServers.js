export const getFilteredServers = (servers, text) => {
    const serversSearch = text.toLowerCase();
    return servers.filter(server => {
      const { name, status } = server;
      return (
        name.toLowerCase().includes(serversSearch) ||
        status.toLowerCase().includes(serversSearch)
      );
    });
  };