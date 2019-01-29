/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdAccountTargetingUnified
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountTargetingUnified extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      audience_size: 'audience_size',
      conversion_lift: 'conversion_lift',
      description: 'description',
      id: 'id',
      img: 'img',
      info: 'info',
      info_title: 'info_title',
      is_recommendation: 'is_recommendation',
      key: 'key',
      link: 'link',
      name: 'name',
      parent: 'parent',
      partner: 'partner',
      path: 'path',
      performance_rating: 'performance_rating',
      raw_name: 'raw_name',
      recommendation_model: 'recommendation_model',
      search_interest_id: 'search_interest_id',
      source: 'source',
      spend: 'spend',
      type: 'type',
      valid: 'valid'
    });
  }

  static get LimitType (): Object {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      genders: 'genders',
      age_min: 'age_min',
      age_max: 'age_max',
      country_groups: 'country_groups',
      countries: 'countries',
      country: 'country',
      cities: 'cities',
      radius: 'radius',
      regions: 'regions',
      zips: 'zips',
      interests: 'interests',
      location_cluster_ids: 'location_cluster_ids',
      keywords: 'keywords',
      education_schools: 'education_schools',
      education_majors: 'education_majors',
      work_positions: 'work_positions',
      work_employers: 'work_employers',
      relationship_statuses: 'relationship_statuses',
      interested_in: 'interested_in',
      locales: 'locales',
      user_adclusters: 'user_adclusters',
      excluded_user_adclusters: 'excluded_user_adclusters',
      conjunctive_user_adclusters: 'conjunctive_user_adclusters',
      custom_audiences: 'custom_audiences',
      excluded_custom_audiences: 'excluded_custom_audiences',
      college_years: 'college_years',
      education_statuses: 'education_statuses',
      connections: 'connections',
      excluded_connections: 'excluded_connections',
      friends_of_connections: 'friends_of_connections',
      user_event: 'user_event',
      dynamic_audience_ids: 'dynamic_audience_ids',
      excluded_dynamic_audience_ids: 'excluded_dynamic_audience_ids',
      rtb_flag: 'rtb_flag',
      site_category: 'site_category',
      geo_locations: 'geo_locations',
      excluded_geo_locations: 'excluded_geo_locations',
      timezones: 'timezones',
      place_page_set_ids: 'place_page_set_ids',
      location_expansion: 'location_expansion',
      page_types: 'page_types',
      publisher_platforms: 'publisher_platforms',
      effective_publisher_platforms: 'effective_publisher_platforms',
      facebook_positions: 'facebook_positions',
      effective_facebook_positions: 'effective_facebook_positions',
      instagram_positions: 'instagram_positions',
      effective_instagram_positions: 'effective_instagram_positions',
      messenger_positions: 'messenger_positions',
      effective_messenger_positions: 'effective_messenger_positions',
      device_platforms: 'device_platforms',
      effective_device_platforms: 'effective_device_platforms',
      audience_network_positions: 'audience_network_positions',
      effective_audience_network_positions: 'effective_audience_network_positions',
      whatsapp_positions: 'whatsapp_positions',
      effective_whatsapp_positions: 'effective_whatsapp_positions',
      excluded_publisher_categories: 'excluded_publisher_categories',
      excluded_publisher_list_ids: 'excluded_publisher_list_ids',
      publisher_visibility_categories: 'publisher_visibility_categories',
      user_device: 'user_device',
      mobile_device_model: 'mobile_device_model',
      excluded_user_device: 'excluded_user_device',
      excluded_mobile_device_model: 'excluded_mobile_device_model',
      user_os: 'user_os',
      wireless_carrier: 'wireless_carrier',
      family_statuses: 'family_statuses',
      industries: 'industries',
      life_events: 'life_events',
      political_views: 'political_views',
      politics: 'politics',
      behaviors: 'behaviors',
      income: 'income',
      net_worth: 'net_worth',
      home_type: 'home_type',
      home_ownership: 'home_ownership',
      home_value: 'home_value',
      ethnic_affinity: 'ethnic_affinity',
      generation: 'generation',
      household_composition: 'household_composition',
      moms: 'moms',
      office_type: 'office_type',
      targeting_optimization: 'targeting_optimization',
      direct_install_devices: 'direct_install_devices',
      engagement_specs: 'engagement_specs',
      excluded_engagement_specs: 'excluded_engagement_specs',
      product_audience_specs: 'product_audience_specs',
      excluded_product_audience_specs: 'excluded_product_audience_specs',
      exclusions: 'exclusions',
      flexible_spec: 'flexible_spec',
      exclude_reached_since: 'exclude_reached_since',
      exclude_previous_days: 'exclude_previous_days',
      app_install_state: 'app_install_state',
      fb_deal_id: 'fb_deal_id',
      interest_defaults_source: 'interest_defaults_source',
      alternate_auto_targeting_option: 'alternate_auto_targeting_option',
      contextual_targeting_categories: 'contextual_targeting_categories',
      topic: 'topic',
      format: 'format',
      trending: 'trending',
      gatekeepers: 'gatekeepers',
      follow_profiles: 'follow_profiles',
      follow_profiles_negative: 'follow_profiles_negative',
      location_categories: 'location_categories',
      user_page_threads: 'user_page_threads',
      user_page_threads_excluded: 'user_page_threads_excluded',
      is_whatsapp_destination_ad: 'is_whatsapp_destination_ad',
      marketplace_product_categories: 'marketplace_product_categories',
      instream_video_sponsorship_placements: 'instream_video_sponsorship_placements',
      prospecting_audience: 'prospecting_audience',
      brand_safety_content_severity_levels: 'brand_safety_content_severity_levels',
      catalog_based_targeting: 'catalog_based_targeting',
      brand_safety_content_filter_levels: 'brand_safety_content_filter_levels'
    });
  }
  static get WhitelistedTypes (): Object {
    return Object.freeze({
      adgroup_id: 'adgroup_id',
      genders: 'genders',
      age_min: 'age_min',
      age_max: 'age_max',
      country_groups: 'country_groups',
      countries: 'countries',
      country: 'country',
      cities: 'cities',
      radius: 'radius',
      regions: 'regions',
      zips: 'zips',
      interests: 'interests',
      location_cluster_ids: 'location_cluster_ids',
      keywords: 'keywords',
      education_schools: 'education_schools',
      education_majors: 'education_majors',
      work_positions: 'work_positions',
      work_employers: 'work_employers',
      relationship_statuses: 'relationship_statuses',
      interested_in: 'interested_in',
      locales: 'locales',
      user_adclusters: 'user_adclusters',
      excluded_user_adclusters: 'excluded_user_adclusters',
      conjunctive_user_adclusters: 'conjunctive_user_adclusters',
      custom_audiences: 'custom_audiences',
      excluded_custom_audiences: 'excluded_custom_audiences',
      college_years: 'college_years',
      education_statuses: 'education_statuses',
      connections: 'connections',
      excluded_connections: 'excluded_connections',
      friends_of_connections: 'friends_of_connections',
      user_event: 'user_event',
      dynamic_audience_ids: 'dynamic_audience_ids',
      excluded_dynamic_audience_ids: 'excluded_dynamic_audience_ids',
      rtb_flag: 'rtb_flag',
      site_category: 'site_category',
      geo_locations: 'geo_locations',
      excluded_geo_locations: 'excluded_geo_locations',
      timezones: 'timezones',
      place_page_set_ids: 'place_page_set_ids',
      location_expansion: 'location_expansion',
      page_types: 'page_types',
      publisher_platforms: 'publisher_platforms',
      effective_publisher_platforms: 'effective_publisher_platforms',
      facebook_positions: 'facebook_positions',
      effective_facebook_positions: 'effective_facebook_positions',
      instagram_positions: 'instagram_positions',
      effective_instagram_positions: 'effective_instagram_positions',
      messenger_positions: 'messenger_positions',
      effective_messenger_positions: 'effective_messenger_positions',
      device_platforms: 'device_platforms',
      effective_device_platforms: 'effective_device_platforms',
      audience_network_positions: 'audience_network_positions',
      effective_audience_network_positions: 'effective_audience_network_positions',
      whatsapp_positions: 'whatsapp_positions',
      effective_whatsapp_positions: 'effective_whatsapp_positions',
      excluded_publisher_categories: 'excluded_publisher_categories',
      excluded_publisher_list_ids: 'excluded_publisher_list_ids',
      publisher_visibility_categories: 'publisher_visibility_categories',
      user_device: 'user_device',
      mobile_device_model: 'mobile_device_model',
      excluded_user_device: 'excluded_user_device',
      excluded_mobile_device_model: 'excluded_mobile_device_model',
      user_os: 'user_os',
      wireless_carrier: 'wireless_carrier',
      family_statuses: 'family_statuses',
      industries: 'industries',
      life_events: 'life_events',
      political_views: 'political_views',
      politics: 'politics',
      behaviors: 'behaviors',
      income: 'income',
      net_worth: 'net_worth',
      home_type: 'home_type',
      home_ownership: 'home_ownership',
      home_value: 'home_value',
      ethnic_affinity: 'ethnic_affinity',
      generation: 'generation',
      household_composition: 'household_composition',
      moms: 'moms',
      office_type: 'office_type',
      targeting_optimization: 'targeting_optimization',
      direct_install_devices: 'direct_install_devices',
      engagement_specs: 'engagement_specs',
      excluded_engagement_specs: 'excluded_engagement_specs',
      product_audience_specs: 'product_audience_specs',
      excluded_product_audience_specs: 'excluded_product_audience_specs',
      exclusions: 'exclusions',
      flexible_spec: 'flexible_spec',
      exclude_reached_since: 'exclude_reached_since',
      exclude_previous_days: 'exclude_previous_days',
      app_install_state: 'app_install_state',
      fb_deal_id: 'fb_deal_id',
      interest_defaults_source: 'interest_defaults_source',
      alternate_auto_targeting_option: 'alternate_auto_targeting_option',
      contextual_targeting_categories: 'contextual_targeting_categories',
      topic: 'topic',
      format: 'format',
      trending: 'trending',
      gatekeepers: 'gatekeepers',
      follow_profiles: 'follow_profiles',
      follow_profiles_negative: 'follow_profiles_negative',
      location_categories: 'location_categories',
      user_page_threads: 'user_page_threads',
      user_page_threads_excluded: 'user_page_threads_excluded',
      is_whatsapp_destination_ad: 'is_whatsapp_destination_ad',
      marketplace_product_categories: 'marketplace_product_categories',
      instream_video_sponsorship_placements: 'instream_video_sponsorship_placements',
      prospecting_audience: 'prospecting_audience',
      brand_safety_content_severity_levels: 'brand_safety_content_severity_levels',
      catalog_based_targeting: 'catalog_based_targeting',
      brand_safety_content_filter_levels: 'brand_safety_content_filter_levels'
    });
  }
  static get Mode (): Object {
    return Object.freeze({
      best_performing: 'best_performing',
      recently_used: 'recently_used',
      related: 'related',
      suggestions: 'suggestions'
    });
  }
  static get Objective (): Object {
    return Object.freeze({
      app_installs: 'APP_INSTALLS',
      brand_awareness: 'BRAND_AWARENESS',
      conversions: 'CONVERSIONS',
      event_responses: 'EVENT_RESPONSES',
      lead_generation: 'LEAD_GENERATION',
      link_clicks: 'LINK_CLICKS',
      local_awareness: 'LOCAL_AWARENESS',
      messages: 'MESSAGES',
      offer_claims: 'OFFER_CLAIMS',
      page_likes: 'PAGE_LIKES',
      post_engagement: 'POST_ENGAGEMENT',
      product_catalog_sales: 'PRODUCT_CATALOG_SALES',
      reach: 'REACH',
      video_views: 'VIDEO_VIEWS'
    });
  }
}
