const users = [
  { id: 0, mention: 'randomPerson' },
  { id: 1, mention: 'someone_else_123' },
];

export const isMention = (mention) => {
  const userExists = users.find(user => mention === user.mention);
  if (userExists) {
    return mention === userExists.mention;
  }
  return false;
};

export const isMentionMe = mention => mention === 'myself';

/* eslint-disable no-console */
export const onMention = mention =>
  console.log(`Hey, ${mention} has been mentioned in the chat! :)`);

export const onMentionMe = mention =>
  console.log(
    `Hey, I have been mentioned in the chat, so proud of ${mention}! :)`,
  );
