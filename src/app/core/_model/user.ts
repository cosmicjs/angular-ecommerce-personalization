export class User {
  _id: string;
  slug: string;
  sessionid: string;
  interests: any;

  constructor(obj) {
    this._id = obj._id;
    this.slug = obj.slug;
    this.sessionid = obj.sessionid;
    this.interests = obj.metadata.interests;
  }
}
