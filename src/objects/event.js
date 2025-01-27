/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import Profile from './profile';
import LiveVideo from './live-video';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';

/**
 * Event
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attending_count: 'attending_count',
      can_guests_invite: 'can_guests_invite',
      category: 'category',
      cover: 'cover',
      declined_count: 'declined_count',
      description: 'description',
      discount_code_enabled: 'discount_code_enabled',
      end_time: 'end_time',
      event_times: 'event_times',
      guest_list_enabled: 'guest_list_enabled',
      id: 'id',
      interested_count: 'interested_count',
      is_canceled: 'is_canceled',
      is_draft: 'is_draft',
      is_page_owned: 'is_page_owned',
      maybe_count: 'maybe_count',
      name: 'name',
      noreply_count: 'noreply_count',
      owner: 'owner',
      parent_group: 'parent_group',
      place: 'place',
      scheduled_publish_time: 'scheduled_publish_time',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri',
      ticket_uri_start_sales_time: 'ticket_uri_start_sales_time',
      ticketing_privacy_uri: 'ticketing_privacy_uri',
      ticketing_terms_uri: 'ticketing_terms_uri',
      timezone: 'timezone',
      type: 'type',
      updated_time: 'updated_time',
    });
  }

  static get Type (): Object {
    return Object.freeze({
      community: 'community',
      group: 'group',
      private: 'private',
      public: 'public',
    });
  }
  static get EventStateFilter (): Object {
    return Object.freeze({
      canceled: 'canceled',
      draft: 'draft',
      published: 'published',
      scheduled_draft_for_publication: 'scheduled_draft_for_publication',
    });
  }
  static get TimeFilter (): Object {
    return Object.freeze({
      past: 'past',
      upcoming: 'upcoming',
    });
  }
  static get PromotableEventTypes (): Object {
    return Object.freeze({
      offsite_ticket: 'OFFSITE_TICKET',
      onsite_ticket: 'ONSITE_TICKET',
      rsvp: 'RSVP',
    });
  }

  getAdmins (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/admins'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Event {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
