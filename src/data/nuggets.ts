export const nuggets = [
  {
    snippetTitle: 'How many keys do I already have?',
    codeOneliner: 'ls ~/.ssh',
    kylesHint: "look for '.pub' extensions and matches",
  },
  {
    snippetTitle: 'View my public key',
    codeOneliner: 'cat ~/.ssh/id_rsa.pub',
    kylesHint: 'output (ok to show to the public)',
  },
  {
    snippetTitle: 'View my private key',
    codeOneliner: 'cat ~/.ssh/id_rsa.pub',
    kylesHint: "DON'T STREAM/RECORD THIS",
  },
  {
    snippetTitle: 'Generate a key (default settings)',
    codeOneliner: 'ssh-keygen',
    kylesHint: '',
  },
  {
    snippetTitle: 'How do I start my agent?',
    codeOneliner: 'ssh-keygen',
    kylesHint: '',
  },
  {
    snippetTitle: 'What have I connected to (in the past)',
    codeOneliner: 'cat ~/.ssh/known_hosts',
    kylesHint: "A [very ugly] list of machine's (IPs) you've connected to",
  },
  {
    snippetTitle:
      "What keys can connect to THIS device (the one I'm sitting at)",
    codeOneliner: 'cat ~/.ssh/authorized_keys ',
    kylesHint:
      'outputs the public keys that are allowd to connect o THIS machines. ',
  },
  {
    snippetTitle: 'Main PARTS',
    codeOneliner:
      '(ssh: for the tunnel) | (ssh-keygen: making keys) | (ssh-agent: daemon to manage keys)',
    kylesHint: '',
  },
  {
    snippetTitle: '',
    codeOneliner: 'ssh-add',
    kylesHint: '',
  },
  {
    snippetTitle: '',
    codeOneliner: 'ssh-agent',
    kylesHint: '',
  },
  {
    snippetTitle: '',
    codeOneliner: '',
    kylesHint: '',
  },
  {
    snippetTitle: 'I Want to learn more',
    codeOneliner: 'man ssh',
    kylesHint: 'Scroll to read about options and overview',
  },
];
