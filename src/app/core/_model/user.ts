export class User {
  _id: string;
  sessionid: string;
  interests: JSON;

  constructor(obj?) {
    this._id = obj ? obj._id : '';
    this.sessionid = obj ? obj.metadata.sessionid : '';
    this.interests = obj ? obj.metadata.interests : '';
  }

  payload() {
    return {
      title: 'some user',
      type_slug: 'users',
      metafields: [
        {
          key: 'sessionid',
          value: this.sessionid
        },
        {
          key: 'interests',
          value: this.interests
        }
      ]
    };
  }
}
