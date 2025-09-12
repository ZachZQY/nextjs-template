export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "ad_watch_records" */
export type Ad_Watch_Records = {
  __typename?: 'ad_watch_records';
  ad_type: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  reward_gold?: Maybe<Scalars['Int']['output']>;
  reward_silver?: Maybe<Scalars['Int']['output']>;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "ad_watch_records" */
export type Ad_Watch_Records_Aggregate = {
  __typename?: 'ad_watch_records_aggregate';
  aggregate?: Maybe<Ad_Watch_Records_Aggregate_Fields>;
  nodes: Array<Ad_Watch_Records>;
};

/** aggregate fields of "ad_watch_records" */
export type Ad_Watch_Records_Aggregate_Fields = {
  __typename?: 'ad_watch_records_aggregate_fields';
  avg?: Maybe<Ad_Watch_Records_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ad_Watch_Records_Max_Fields>;
  min?: Maybe<Ad_Watch_Records_Min_Fields>;
  stddev?: Maybe<Ad_Watch_Records_Stddev_Fields>;
  stddev_pop?: Maybe<Ad_Watch_Records_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ad_Watch_Records_Stddev_Samp_Fields>;
  sum?: Maybe<Ad_Watch_Records_Sum_Fields>;
  var_pop?: Maybe<Ad_Watch_Records_Var_Pop_Fields>;
  var_samp?: Maybe<Ad_Watch_Records_Var_Samp_Fields>;
  variance?: Maybe<Ad_Watch_Records_Variance_Fields>;
};


/** aggregate fields of "ad_watch_records" */
export type Ad_Watch_Records_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ad_Watch_Records_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Ad_Watch_Records_Avg_Fields = {
  __typename?: 'ad_watch_records_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "ad_watch_records". All fields are combined with a logical 'AND'. */
export type Ad_Watch_Records_Bool_Exp = {
  _and?: InputMaybe<Array<Ad_Watch_Records_Bool_Exp>>;
  _not?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
  _or?: InputMaybe<Array<Ad_Watch_Records_Bool_Exp>>;
  ad_type?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  reward_gold?: InputMaybe<Int_Comparison_Exp>;
  reward_silver?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "ad_watch_records" */
export enum Ad_Watch_Records_Constraint {
  /** unique or primary key constraint on columns "id" */
  AdWatchRecordsPkey = 'ad_watch_records_pkey'
}

/** input type for incrementing numeric columns in table "ad_watch_records" */
export type Ad_Watch_Records_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  reward_gold?: InputMaybe<Scalars['Int']['input']>;
  reward_silver?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "ad_watch_records" */
export type Ad_Watch_Records_Insert_Input = {
  ad_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  reward_gold?: InputMaybe<Scalars['Int']['input']>;
  reward_silver?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Ad_Watch_Records_Max_Fields = {
  __typename?: 'ad_watch_records_max_fields';
  ad_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  reward_gold?: Maybe<Scalars['Int']['output']>;
  reward_silver?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Ad_Watch_Records_Min_Fields = {
  __typename?: 'ad_watch_records_min_fields';
  ad_type?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  reward_gold?: Maybe<Scalars['Int']['output']>;
  reward_silver?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "ad_watch_records" */
export type Ad_Watch_Records_Mutation_Response = {
  __typename?: 'ad_watch_records_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ad_Watch_Records>;
};

/** on_conflict condition type for table "ad_watch_records" */
export type Ad_Watch_Records_On_Conflict = {
  constraint: Ad_Watch_Records_Constraint;
  update_columns?: Array<Ad_Watch_Records_Update_Column>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};

/** Ordering options when selecting data from "ad_watch_records". */
export type Ad_Watch_Records_Order_By = {
  ad_type?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  reward_gold?: InputMaybe<Order_By>;
  reward_silver?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ad_watch_records */
export type Ad_Watch_Records_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "ad_watch_records" */
export enum Ad_Watch_Records_Select_Column {
  /** column name */
  AdType = 'ad_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RewardGold = 'reward_gold',
  /** column name */
  RewardSilver = 'reward_silver',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "ad_watch_records" */
export type Ad_Watch_Records_Set_Input = {
  ad_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  reward_gold?: InputMaybe<Scalars['Int']['input']>;
  reward_silver?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Ad_Watch_Records_Stddev_Fields = {
  __typename?: 'ad_watch_records_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Ad_Watch_Records_Stddev_Pop_Fields = {
  __typename?: 'ad_watch_records_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Ad_Watch_Records_Stddev_Samp_Fields = {
  __typename?: 'ad_watch_records_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "ad_watch_records" */
export type Ad_Watch_Records_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ad_Watch_Records_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ad_Watch_Records_Stream_Cursor_Value_Input = {
  ad_type?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  reward_gold?: InputMaybe<Scalars['Int']['input']>;
  reward_silver?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Ad_Watch_Records_Sum_Fields = {
  __typename?: 'ad_watch_records_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  reward_gold?: Maybe<Scalars['Int']['output']>;
  reward_silver?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "ad_watch_records" */
export enum Ad_Watch_Records_Update_Column {
  /** column name */
  AdType = 'ad_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RewardGold = 'reward_gold',
  /** column name */
  RewardSilver = 'reward_silver',
  /** column name */
  UserId = 'user_id'
}

export type Ad_Watch_Records_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ad_Watch_Records_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ad_Watch_Records_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ad_Watch_Records_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ad_Watch_Records_Var_Pop_Fields = {
  __typename?: 'ad_watch_records_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Ad_Watch_Records_Var_Samp_Fields = {
  __typename?: 'ad_watch_records_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Ad_Watch_Records_Variance_Fields = {
  __typename?: 'ad_watch_records_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  reward_gold?: Maybe<Scalars['Float']['output']>;
  reward_silver?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** 好友表 */
export type Ai_Friends = {
  __typename?: 'ai_friends';
  /** An object relationship */
  character?: Maybe<Characters>;
  /** 人物id */
  character_id: Scalars['bigint']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  /** 用户id */
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "ai_friends" */
export type Ai_Friends_Aggregate = {
  __typename?: 'ai_friends_aggregate';
  aggregate?: Maybe<Ai_Friends_Aggregate_Fields>;
  nodes: Array<Ai_Friends>;
};

export type Ai_Friends_Aggregate_Bool_Exp = {
  count?: InputMaybe<Ai_Friends_Aggregate_Bool_Exp_Count>;
};

export type Ai_Friends_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Ai_Friends_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "ai_friends" */
export type Ai_Friends_Aggregate_Fields = {
  __typename?: 'ai_friends_aggregate_fields';
  avg?: Maybe<Ai_Friends_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Ai_Friends_Max_Fields>;
  min?: Maybe<Ai_Friends_Min_Fields>;
  stddev?: Maybe<Ai_Friends_Stddev_Fields>;
  stddev_pop?: Maybe<Ai_Friends_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ai_Friends_Stddev_Samp_Fields>;
  sum?: Maybe<Ai_Friends_Sum_Fields>;
  var_pop?: Maybe<Ai_Friends_Var_Pop_Fields>;
  var_samp?: Maybe<Ai_Friends_Var_Samp_Fields>;
  variance?: Maybe<Ai_Friends_Variance_Fields>;
};


/** aggregate fields of "ai_friends" */
export type Ai_Friends_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "ai_friends" */
export type Ai_Friends_Aggregate_Order_By = {
  avg?: InputMaybe<Ai_Friends_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ai_Friends_Max_Order_By>;
  min?: InputMaybe<Ai_Friends_Min_Order_By>;
  stddev?: InputMaybe<Ai_Friends_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ai_Friends_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ai_Friends_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ai_Friends_Sum_Order_By>;
  var_pop?: InputMaybe<Ai_Friends_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ai_Friends_Var_Samp_Order_By>;
  variance?: InputMaybe<Ai_Friends_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ai_friends" */
export type Ai_Friends_Arr_Rel_Insert_Input = {
  data: Array<Ai_Friends_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Ai_Friends_On_Conflict>;
};

/** aggregate avg on columns */
export type Ai_Friends_Avg_Fields = {
  __typename?: 'ai_friends_avg_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "ai_friends" */
export type Ai_Friends_Avg_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ai_friends". All fields are combined with a logical 'AND'. */
export type Ai_Friends_Bool_Exp = {
  _and?: InputMaybe<Array<Ai_Friends_Bool_Exp>>;
  _not?: InputMaybe<Ai_Friends_Bool_Exp>;
  _or?: InputMaybe<Array<Ai_Friends_Bool_Exp>>;
  character?: InputMaybe<Characters_Bool_Exp>;
  character_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "ai_friends" */
export enum Ai_Friends_Constraint {
  /** unique or primary key constraint on columns "id" */
  AiFriendsPkey = 'ai_friends_pkey'
}

/** input type for incrementing numeric columns in table "ai_friends" */
export type Ai_Friends_Inc_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "ai_friends" */
export type Ai_Friends_Insert_Input = {
  character?: InputMaybe<Characters_Obj_Rel_Insert_Input>;
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Ai_Friends_Max_Fields = {
  __typename?: 'ai_friends_max_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "ai_friends" */
export type Ai_Friends_Max_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ai_Friends_Min_Fields = {
  __typename?: 'ai_friends_min_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "ai_friends" */
export type Ai_Friends_Min_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ai_friends" */
export type Ai_Friends_Mutation_Response = {
  __typename?: 'ai_friends_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Ai_Friends>;
};

/** on_conflict condition type for table "ai_friends" */
export type Ai_Friends_On_Conflict = {
  constraint: Ai_Friends_Constraint;
  update_columns?: Array<Ai_Friends_Update_Column>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};

/** Ordering options when selecting data from "ai_friends". */
export type Ai_Friends_Order_By = {
  character?: InputMaybe<Characters_Order_By>;
  character_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ai_friends */
export type Ai_Friends_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "ai_friends" */
export enum Ai_Friends_Select_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "ai_friends" */
export type Ai_Friends_Set_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Ai_Friends_Stddev_Fields = {
  __typename?: 'ai_friends_stddev_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "ai_friends" */
export type Ai_Friends_Stddev_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ai_Friends_Stddev_Pop_Fields = {
  __typename?: 'ai_friends_stddev_pop_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "ai_friends" */
export type Ai_Friends_Stddev_Pop_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ai_Friends_Stddev_Samp_Fields = {
  __typename?: 'ai_friends_stddev_samp_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "ai_friends" */
export type Ai_Friends_Stddev_Samp_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "ai_friends" */
export type Ai_Friends_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Ai_Friends_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Ai_Friends_Stream_Cursor_Value_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Ai_Friends_Sum_Fields = {
  __typename?: 'ai_friends_sum_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "ai_friends" */
export type Ai_Friends_Sum_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "ai_friends" */
export enum Ai_Friends_Update_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Ai_Friends_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Ai_Friends_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Ai_Friends_Set_Input>;
  /** filter the rows which have to be updated */
  where: Ai_Friends_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Ai_Friends_Var_Pop_Fields = {
  __typename?: 'ai_friends_var_pop_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "ai_friends" */
export type Ai_Friends_Var_Pop_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ai_Friends_Var_Samp_Fields = {
  __typename?: 'ai_friends_var_samp_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "ai_friends" */
export type Ai_Friends_Var_Samp_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ai_Friends_Variance_Fields = {
  __typename?: 'ai_friends_variance_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "ai_friends" */
export type Ai_Friends_Variance_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** 人物个性表 */
export type Character_Personalitys = {
  __typename?: 'character_personalitys';
  /** An array relationship */
  character: Array<Characters>;
  /** An aggregate relationship */
  character_aggregate: Characters_Aggregate;
  character_personality_characters?: Maybe<Scalars['bigint']['output']>;
  /** 个性特征 */
  characteristic: Scalars['String']['output'];
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 是否隐藏 */
  is_hide?: Maybe<Scalars['Boolean']['output']>;
  /** 个性名称 */
  name: Scalars['String']['output'];
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
};


/** 人物个性表 */
export type Character_PersonalitysCharacterArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


/** 人物个性表 */
export type Character_PersonalitysCharacter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};

/** aggregated selection of "character_personalitys" */
export type Character_Personalitys_Aggregate = {
  __typename?: 'character_personalitys_aggregate';
  aggregate?: Maybe<Character_Personalitys_Aggregate_Fields>;
  nodes: Array<Character_Personalitys>;
};

/** aggregate fields of "character_personalitys" */
export type Character_Personalitys_Aggregate_Fields = {
  __typename?: 'character_personalitys_aggregate_fields';
  avg?: Maybe<Character_Personalitys_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Character_Personalitys_Max_Fields>;
  min?: Maybe<Character_Personalitys_Min_Fields>;
  stddev?: Maybe<Character_Personalitys_Stddev_Fields>;
  stddev_pop?: Maybe<Character_Personalitys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Character_Personalitys_Stddev_Samp_Fields>;
  sum?: Maybe<Character_Personalitys_Sum_Fields>;
  var_pop?: Maybe<Character_Personalitys_Var_Pop_Fields>;
  var_samp?: Maybe<Character_Personalitys_Var_Samp_Fields>;
  variance?: Maybe<Character_Personalitys_Variance_Fields>;
};


/** aggregate fields of "character_personalitys" */
export type Character_Personalitys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Character_Personalitys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Character_Personalitys_Avg_Fields = {
  __typename?: 'character_personalitys_avg_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "character_personalitys". All fields are combined with a logical 'AND'. */
export type Character_Personalitys_Bool_Exp = {
  _and?: InputMaybe<Array<Character_Personalitys_Bool_Exp>>;
  _not?: InputMaybe<Character_Personalitys_Bool_Exp>;
  _or?: InputMaybe<Array<Character_Personalitys_Bool_Exp>>;
  character?: InputMaybe<Characters_Bool_Exp>;
  character_aggregate?: InputMaybe<Characters_Aggregate_Bool_Exp>;
  character_personality_characters?: InputMaybe<Bigint_Comparison_Exp>;
  characteristic?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_hide?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "character_personalitys" */
export enum Character_Personalitys_Constraint {
  /** unique or primary key constraint on columns "id" */
  CharacterPersonalitysPkey = 'character_personalitys_pkey'
}

/** input type for incrementing numeric columns in table "character_personalitys" */
export type Character_Personalitys_Inc_Input = {
  character_personality_characters?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "character_personalitys" */
export type Character_Personalitys_Insert_Input = {
  character?: InputMaybe<Characters_Arr_Rel_Insert_Input>;
  character_personality_characters?: InputMaybe<Scalars['bigint']['input']>;
  /** 个性特征 */
  characteristic?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 个性名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Character_Personalitys_Max_Fields = {
  __typename?: 'character_personalitys_max_fields';
  character_personality_characters?: Maybe<Scalars['bigint']['output']>;
  /** 个性特征 */
  characteristic?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 个性名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Character_Personalitys_Min_Fields = {
  __typename?: 'character_personalitys_min_fields';
  character_personality_characters?: Maybe<Scalars['bigint']['output']>;
  /** 个性特征 */
  characteristic?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 个性名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "character_personalitys" */
export type Character_Personalitys_Mutation_Response = {
  __typename?: 'character_personalitys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Character_Personalitys>;
};

/** on_conflict condition type for table "character_personalitys" */
export type Character_Personalitys_On_Conflict = {
  constraint: Character_Personalitys_Constraint;
  update_columns?: Array<Character_Personalitys_Update_Column>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};

/** Ordering options when selecting data from "character_personalitys". */
export type Character_Personalitys_Order_By = {
  character_aggregate?: InputMaybe<Characters_Aggregate_Order_By>;
  character_personality_characters?: InputMaybe<Order_By>;
  characteristic?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_hide?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: character_personalitys */
export type Character_Personalitys_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "character_personalitys" */
export enum Character_Personalitys_Select_Column {
  /** column name */
  CharacterPersonalityCharacters = 'character_personality_characters',
  /** column name */
  Characteristic = 'characteristic',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "character_personalitys" */
export type Character_Personalitys_Set_Input = {
  character_personality_characters?: InputMaybe<Scalars['bigint']['input']>;
  /** 个性特征 */
  characteristic?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 个性名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Character_Personalitys_Stddev_Fields = {
  __typename?: 'character_personalitys_stddev_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Character_Personalitys_Stddev_Pop_Fields = {
  __typename?: 'character_personalitys_stddev_pop_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Character_Personalitys_Stddev_Samp_Fields = {
  __typename?: 'character_personalitys_stddev_samp_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "character_personalitys" */
export type Character_Personalitys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Character_Personalitys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Character_Personalitys_Stream_Cursor_Value_Input = {
  character_personality_characters?: InputMaybe<Scalars['bigint']['input']>;
  /** 个性特征 */
  characteristic?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 个性名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Character_Personalitys_Sum_Fields = {
  __typename?: 'character_personalitys_sum_fields';
  character_personality_characters?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "character_personalitys" */
export enum Character_Personalitys_Update_Column {
  /** column name */
  CharacterPersonalityCharacters = 'character_personality_characters',
  /** column name */
  Characteristic = 'characteristic',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Character_Personalitys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Character_Personalitys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Character_Personalitys_Set_Input>;
  /** filter the rows which have to be updated */
  where: Character_Personalitys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Character_Personalitys_Var_Pop_Fields = {
  __typename?: 'character_personalitys_var_pop_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Character_Personalitys_Var_Samp_Fields = {
  __typename?: 'character_personalitys_var_samp_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Character_Personalitys_Variance_Fields = {
  __typename?: 'character_personalitys_variance_fields';
  character_personality_characters?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** 角色分类表 */
export type Character_Types = {
  __typename?: 'character_types';
  created_at: Scalars['timestamptz']['output'];
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 分类名称 */
  name: Scalars['String']['output'];
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "character_types" */
export type Character_Types_Aggregate = {
  __typename?: 'character_types_aggregate';
  aggregate?: Maybe<Character_Types_Aggregate_Fields>;
  nodes: Array<Character_Types>;
};

/** aggregate fields of "character_types" */
export type Character_Types_Aggregate_Fields = {
  __typename?: 'character_types_aggregate_fields';
  avg?: Maybe<Character_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Character_Types_Max_Fields>;
  min?: Maybe<Character_Types_Min_Fields>;
  stddev?: Maybe<Character_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Character_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Character_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Character_Types_Sum_Fields>;
  var_pop?: Maybe<Character_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Character_Types_Var_Samp_Fields>;
  variance?: Maybe<Character_Types_Variance_Fields>;
};


/** aggregate fields of "character_types" */
export type Character_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Character_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Character_Types_Avg_Fields = {
  __typename?: 'character_types_avg_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "character_types". All fields are combined with a logical 'AND'. */
export type Character_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Character_Types_Bool_Exp>>;
  _not?: InputMaybe<Character_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Character_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "character_types" */
export enum Character_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  TagsPkey = 'tags_pkey'
}

/** input type for incrementing numeric columns in table "character_types" */
export type Character_Types_Inc_Input = {
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "character_types" */
export type Character_Types_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Character_Types_Max_Fields = {
  __typename?: 'character_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Character_Types_Min_Fields = {
  __typename?: 'character_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "character_types" */
export type Character_Types_Mutation_Response = {
  __typename?: 'character_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Character_Types>;
};

/** on_conflict condition type for table "character_types" */
export type Character_Types_On_Conflict = {
  constraint: Character_Types_Constraint;
  update_columns?: Array<Character_Types_Update_Column>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "character_types". */
export type Character_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: character_types */
export type Character_Types_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "character_types" */
export enum Character_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "character_types" */
export type Character_Types_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Character_Types_Stddev_Fields = {
  __typename?: 'character_types_stddev_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Character_Types_Stddev_Pop_Fields = {
  __typename?: 'character_types_stddev_pop_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Character_Types_Stddev_Samp_Fields = {
  __typename?: 'character_types_stddev_samp_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "character_types" */
export type Character_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Character_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Character_Types_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Character_Types_Sum_Fields = {
  __typename?: 'character_types_sum_fields';
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "character_types" */
export enum Character_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Character_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Character_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Character_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Character_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Character_Types_Var_Pop_Fields = {
  __typename?: 'character_types_var_pop_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Character_Types_Var_Samp_Fields = {
  __typename?: 'character_types_var_samp_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Character_Types_Variance_Fields = {
  __typename?: 'character_types_variance_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** 角色表 */
export type Characters = {
  __typename?: 'characters';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  char___conv: Array<Conversations>;
  /** An aggregate relationship */
  char___conv_aggregate: Conversations_Aggregate;
  /** An array relationship */
  char___friend: Array<Ai_Friends>;
  /** An aggregate relationship */
  char___friend_aggregate: Ai_Friends_Aggregate;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 是否热门 */
  is_hot?: Maybe<Scalars['Boolean']['output']>;
  /** 是否发布 */
  is_release: Scalars['Boolean']['output'];
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};


/** 角色表 */
export type CharactersChar___ConvArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


/** 角色表 */
export type CharactersChar___Conv_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


/** 角色表 */
export type CharactersChar___FriendArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


/** 角色表 */
export type CharactersChar___Friend_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};

/** aggregated selection of "characters" */
export type Characters_Aggregate = {
  __typename?: 'characters_aggregate';
  aggregate?: Maybe<Characters_Aggregate_Fields>;
  nodes: Array<Characters>;
};

export type Characters_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Characters_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Characters_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Characters_Aggregate_Bool_Exp_Count>;
};

export type Characters_Aggregate_Bool_Exp_Bool_And = {
  arguments: Characters_Select_Column_Characters_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Characters_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Characters_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Characters_Select_Column_Characters_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Characters_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Characters_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Characters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Characters_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "characters" */
export type Characters_Aggregate_Fields = {
  __typename?: 'characters_aggregate_fields';
  avg?: Maybe<Characters_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Characters_Max_Fields>;
  min?: Maybe<Characters_Min_Fields>;
  stddev?: Maybe<Characters_Stddev_Fields>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Fields>;
  sum?: Maybe<Characters_Sum_Fields>;
  var_pop?: Maybe<Characters_Var_Pop_Fields>;
  var_samp?: Maybe<Characters_Var_Samp_Fields>;
  variance?: Maybe<Characters_Variance_Fields>;
};


/** aggregate fields of "characters" */
export type Characters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Characters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "characters" */
export type Characters_Aggregate_Order_By = {
  avg?: InputMaybe<Characters_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Characters_Max_Order_By>;
  min?: InputMaybe<Characters_Min_Order_By>;
  stddev?: InputMaybe<Characters_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Characters_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Characters_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Characters_Sum_Order_By>;
  var_pop?: InputMaybe<Characters_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Characters_Var_Samp_Order_By>;
  variance?: InputMaybe<Characters_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "characters" */
export type Characters_Arr_Rel_Insert_Input = {
  data: Array<Characters_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Characters_On_Conflict>;
};

/** aggregate avg on columns */
export type Characters_Avg_Fields = {
  __typename?: 'characters_avg_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "characters" */
export type Characters_Avg_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "characters". All fields are combined with a logical 'AND'. */
export type Characters_Bool_Exp = {
  _and?: InputMaybe<Array<Characters_Bool_Exp>>;
  _not?: InputMaybe<Characters_Bool_Exp>;
  _or?: InputMaybe<Array<Characters_Bool_Exp>>;
  background_story?: InputMaybe<String_Comparison_Exp>;
  career?: InputMaybe<String_Comparison_Exp>;
  char___conv?: InputMaybe<Conversations_Bool_Exp>;
  char___conv_aggregate?: InputMaybe<Conversations_Aggregate_Bool_Exp>;
  char___friend?: InputMaybe<Ai_Friends_Bool_Exp>;
  char___friend_aggregate?: InputMaybe<Ai_Friends_Aggregate_Bool_Exp>;
  character_personality_id?: InputMaybe<Bigint_Comparison_Exp>;
  character_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_hot?: InputMaybe<Boolean_Comparison_Exp>;
  is_release?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  popularity?: InputMaybe<Bigint_Comparison_Exp>;
  preview_video_url?: InputMaybe<String_Comparison_Exp>;
  prologue?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  story_prologue?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  user_role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "characters" */
export enum Characters_Constraint {
  /** unique or primary key constraint on columns "id" */
  CharactersPkey = 'characters_pkey'
}

/** input type for incrementing numeric columns in table "characters" */
export type Characters_Inc_Input = {
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "characters" */
export type Characters_Insert_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  char___conv?: InputMaybe<Conversations_Arr_Rel_Insert_Input>;
  char___friend?: InputMaybe<Ai_Friends_Arr_Rel_Insert_Input>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Characters_Max_Fields = {
  __typename?: 'characters_max_fields';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "characters" */
export type Characters_Max_Order_By = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Order_By>;
  /** 角色职业 */
  career?: InputMaybe<Order_By>;
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色图片URL */
  image_url?: InputMaybe<Order_By>;
  /** 角色名称 */
  name?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Order_By>;
  /** 开场白 */
  prologue?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  /** 用户角色 */
  user_role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Characters_Min_Fields = {
  __typename?: 'characters_min_fields';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "characters" */
export type Characters_Min_Order_By = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Order_By>;
  /** 角色职业 */
  career?: InputMaybe<Order_By>;
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色图片URL */
  image_url?: InputMaybe<Order_By>;
  /** 角色名称 */
  name?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Order_By>;
  /** 开场白 */
  prologue?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  /** 用户角色 */
  user_role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "characters" */
export type Characters_Mutation_Response = {
  __typename?: 'characters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Characters>;
};

/** input type for inserting object relation for remote table "characters" */
export type Characters_Obj_Rel_Insert_Input = {
  data: Characters_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Characters_On_Conflict>;
};

/** on_conflict condition type for table "characters" */
export type Characters_On_Conflict = {
  constraint: Characters_Constraint;
  update_columns?: Array<Characters_Update_Column>;
  where?: InputMaybe<Characters_Bool_Exp>;
};

/** Ordering options when selecting data from "characters". */
export type Characters_Order_By = {
  background_story?: InputMaybe<Order_By>;
  career?: InputMaybe<Order_By>;
  char___conv_aggregate?: InputMaybe<Conversations_Aggregate_Order_By>;
  char___friend_aggregate?: InputMaybe<Ai_Friends_Aggregate_Order_By>;
  character_personality_id?: InputMaybe<Order_By>;
  character_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_hot?: InputMaybe<Order_By>;
  is_release?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  preview_video_url?: InputMaybe<Order_By>;
  prologue?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  story_prologue?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: characters */
export type Characters_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "characters" */
export enum Characters_Select_Column {
  /** column name */
  BackgroundStory = 'background_story',
  /** column name */
  Career = 'career',
  /** column name */
  CharacterPersonalityId = 'character_personality_id',
  /** column name */
  CharacterTypeId = 'character_type_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PreviewVideoUrl = 'preview_video_url',
  /** column name */
  Prologue = 'prologue',
  /** column name */
  Sort = 'sort',
  /** column name */
  StoryPrologue = 'story_prologue',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

/** select "characters_aggregate_bool_exp_bool_and_arguments_columns" columns of table "characters" */
export enum Characters_Select_Column_Characters_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release'
}

/** select "characters_aggregate_bool_exp_bool_or_arguments_columns" columns of table "characters" */
export enum Characters_Select_Column_Characters_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release'
}

/** input type for updating data in table "characters" */
export type Characters_Set_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "characters_ss" */
export type Characters_Ss = {
  __typename?: 'characters_ss';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 是否热门 */
  is_hot?: Maybe<Scalars['Boolean']['output']>;
  /** 是否发布 */
  is_release: Scalars['Boolean']['output'];
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "characters_ss" */
export type Characters_Ss_Aggregate = {
  __typename?: 'characters_ss_aggregate';
  aggregate?: Maybe<Characters_Ss_Aggregate_Fields>;
  nodes: Array<Characters_Ss>;
};

/** aggregate fields of "characters_ss" */
export type Characters_Ss_Aggregate_Fields = {
  __typename?: 'characters_ss_aggregate_fields';
  avg?: Maybe<Characters_Ss_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Characters_Ss_Max_Fields>;
  min?: Maybe<Characters_Ss_Min_Fields>;
  stddev?: Maybe<Characters_Ss_Stddev_Fields>;
  stddev_pop?: Maybe<Characters_Ss_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Characters_Ss_Stddev_Samp_Fields>;
  sum?: Maybe<Characters_Ss_Sum_Fields>;
  var_pop?: Maybe<Characters_Ss_Var_Pop_Fields>;
  var_samp?: Maybe<Characters_Ss_Var_Samp_Fields>;
  variance?: Maybe<Characters_Ss_Variance_Fields>;
};


/** aggregate fields of "characters_ss" */
export type Characters_Ss_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Characters_Ss_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Characters_Ss_Avg_Fields = {
  __typename?: 'characters_ss_avg_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "characters_ss". All fields are combined with a logical 'AND'. */
export type Characters_Ss_Bool_Exp = {
  _and?: InputMaybe<Array<Characters_Ss_Bool_Exp>>;
  _not?: InputMaybe<Characters_Ss_Bool_Exp>;
  _or?: InputMaybe<Array<Characters_Ss_Bool_Exp>>;
  background_story?: InputMaybe<String_Comparison_Exp>;
  career?: InputMaybe<String_Comparison_Exp>;
  character_personality_id?: InputMaybe<Bigint_Comparison_Exp>;
  character_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_hot?: InputMaybe<Boolean_Comparison_Exp>;
  is_release?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  popularity?: InputMaybe<Bigint_Comparison_Exp>;
  preview_video_url?: InputMaybe<String_Comparison_Exp>;
  prologue?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  story_prologue?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  user_role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "characters_ss" */
export enum Characters_Ss_Constraint {
  /** unique or primary key constraint on columns "id" */
  CharactersSsPkey = 'characters_ss_pkey'
}

/** input type for incrementing numeric columns in table "characters_ss" */
export type Characters_Ss_Inc_Input = {
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "characters_ss" */
export type Characters_Ss_Insert_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Characters_Ss_Max_Fields = {
  __typename?: 'characters_ss_max_fields';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Characters_Ss_Min_Fields = {
  __typename?: 'characters_ss_min_fields';
  /** 背景故事/人物背景 */
  background_story?: Maybe<Scalars['String']['output']>;
  /** 角色职业 */
  career?: Maybe<Scalars['String']['output']>;
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 预览视频URL */
  preview_video_url?: Maybe<Scalars['String']['output']>;
  /** 开场白 */
  prologue?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 剧情开场白 */
  story_prologue?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "characters_ss" */
export type Characters_Ss_Mutation_Response = {
  __typename?: 'characters_ss_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Characters_Ss>;
};

/** on_conflict condition type for table "characters_ss" */
export type Characters_Ss_On_Conflict = {
  constraint: Characters_Ss_Constraint;
  update_columns?: Array<Characters_Ss_Update_Column>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};

/** Ordering options when selecting data from "characters_ss". */
export type Characters_Ss_Order_By = {
  background_story?: InputMaybe<Order_By>;
  career?: InputMaybe<Order_By>;
  character_personality_id?: InputMaybe<Order_By>;
  character_type_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_hot?: InputMaybe<Order_By>;
  is_release?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  popularity?: InputMaybe<Order_By>;
  preview_video_url?: InputMaybe<Order_By>;
  prologue?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  story_prologue?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: characters_ss */
export type Characters_Ss_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "characters_ss" */
export enum Characters_Ss_Select_Column {
  /** column name */
  BackgroundStory = 'background_story',
  /** column name */
  Career = 'career',
  /** column name */
  CharacterPersonalityId = 'character_personality_id',
  /** column name */
  CharacterTypeId = 'character_type_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PreviewVideoUrl = 'preview_video_url',
  /** column name */
  Prologue = 'prologue',
  /** column name */
  Sort = 'sort',
  /** column name */
  StoryPrologue = 'story_prologue',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

/** input type for updating data in table "characters_ss" */
export type Characters_Ss_Set_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Characters_Ss_Stddev_Fields = {
  __typename?: 'characters_ss_stddev_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Characters_Ss_Stddev_Pop_Fields = {
  __typename?: 'characters_ss_stddev_pop_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Characters_Ss_Stddev_Samp_Fields = {
  __typename?: 'characters_ss_stddev_samp_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "characters_ss" */
export type Characters_Ss_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Characters_Ss_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Characters_Ss_Stream_Cursor_Value_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Characters_Ss_Sum_Fields = {
  __typename?: 'characters_ss_sum_fields';
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "characters_ss" */
export enum Characters_Ss_Update_Column {
  /** column name */
  BackgroundStory = 'background_story',
  /** column name */
  Career = 'career',
  /** column name */
  CharacterPersonalityId = 'character_personality_id',
  /** column name */
  CharacterTypeId = 'character_type_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PreviewVideoUrl = 'preview_video_url',
  /** column name */
  Prologue = 'prologue',
  /** column name */
  Sort = 'sort',
  /** column name */
  StoryPrologue = 'story_prologue',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

export type Characters_Ss_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Characters_Ss_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Characters_Ss_Set_Input>;
  /** filter the rows which have to be updated */
  where: Characters_Ss_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Characters_Ss_Var_Pop_Fields = {
  __typename?: 'characters_ss_var_pop_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Characters_Ss_Var_Samp_Fields = {
  __typename?: 'characters_ss_var_samp_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Characters_Ss_Variance_Fields = {
  __typename?: 'characters_ss_variance_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev on columns */
export type Characters_Stddev_Fields = {
  __typename?: 'characters_stddev_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "characters" */
export type Characters_Stddev_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Characters_Stddev_Pop_Fields = {
  __typename?: 'characters_stddev_pop_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "characters" */
export type Characters_Stddev_Pop_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Characters_Stddev_Samp_Fields = {
  __typename?: 'characters_stddev_samp_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "characters" */
export type Characters_Stddev_Samp_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "characters" */
export type Characters_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Characters_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Characters_Stream_Cursor_Value_Input = {
  /** 背景故事/人物背景 */
  background_story?: InputMaybe<Scalars['String']['input']>;
  /** 角色职业 */
  career?: InputMaybe<Scalars['String']['input']>;
  character_personality_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Scalars['bigint']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 是否发布 */
  is_release?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 人气值 */
  popularity?: InputMaybe<Scalars['bigint']['input']>;
  /** 预览视频URL */
  preview_video_url?: InputMaybe<Scalars['String']['input']>;
  /** 开场白 */
  prologue?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 剧情开场白 */
  story_prologue?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Characters_Sum_Fields = {
  __typename?: 'characters_sum_fields';
  character_personality_id?: Maybe<Scalars['bigint']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "characters" */
export type Characters_Sum_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "characters" */
export enum Characters_Update_Column {
  /** column name */
  BackgroundStory = 'background_story',
  /** column name */
  Career = 'career',
  /** column name */
  CharacterPersonalityId = 'character_personality_id',
  /** column name */
  CharacterTypeId = 'character_type_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  IsRelease = 'is_release',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  PreviewVideoUrl = 'preview_video_url',
  /** column name */
  Prologue = 'prologue',
  /** column name */
  Sort = 'sort',
  /** column name */
  StoryPrologue = 'story_prologue',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

export type Characters_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Characters_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Characters_Set_Input>;
  /** filter the rows which have to be updated */
  where: Characters_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Characters_Var_Pop_Fields = {
  __typename?: 'characters_var_pop_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "characters" */
export type Characters_Var_Pop_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Characters_Var_Samp_Fields = {
  __typename?: 'characters_var_samp_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "characters" */
export type Characters_Var_Samp_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Characters_Variance_Fields = {
  __typename?: 'characters_variance_fields';
  character_personality_id?: Maybe<Scalars['Float']['output']>;
  /** 角色类型ID */
  character_type_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 人气值 */
  popularity?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "characters" */
export type Characters_Variance_Order_By = {
  character_personality_id?: InputMaybe<Order_By>;
  /** 角色类型ID */
  character_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 人气值 */
  popularity?: InputMaybe<Order_By>;
  /** 排序 */
  sort?: InputMaybe<Order_By>;
  /** 使用等级 */
  use_level?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** 聊天信息表 */
export type Chat_Messages = {
  __typename?: 'chat_messages';
  /** 聊天内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['bigint']['output']>;
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 消息类型 */
  message_type?: Maybe<Scalars['String']['output']>;
  /** 发送者类型 */
  sender?: Maybe<Scalars['String']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "chat_messages" */
export type Chat_Messages_Aggregate = {
  __typename?: 'chat_messages_aggregate';
  aggregate?: Maybe<Chat_Messages_Aggregate_Fields>;
  nodes: Array<Chat_Messages>;
};

export type Chat_Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Chat_Messages_Aggregate_Bool_Exp_Count>;
};

export type Chat_Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Chat_Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_Fields = {
  __typename?: 'chat_messages_aggregate_fields';
  avg?: Maybe<Chat_Messages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Chat_Messages_Max_Fields>;
  min?: Maybe<Chat_Messages_Min_Fields>;
  stddev?: Maybe<Chat_Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Chat_Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chat_Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Chat_Messages_Sum_Fields>;
  var_pop?: Maybe<Chat_Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Chat_Messages_Var_Samp_Fields>;
  variance?: Maybe<Chat_Messages_Variance_Fields>;
};


/** aggregate fields of "chat_messages" */
export type Chat_Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "chat_messages" */
export type Chat_Messages_Aggregate_Order_By = {
  avg?: InputMaybe<Chat_Messages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Chat_Messages_Max_Order_By>;
  min?: InputMaybe<Chat_Messages_Min_Order_By>;
  stddev?: InputMaybe<Chat_Messages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Chat_Messages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Chat_Messages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Chat_Messages_Sum_Order_By>;
  var_pop?: InputMaybe<Chat_Messages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Chat_Messages_Var_Samp_Order_By>;
  variance?: InputMaybe<Chat_Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chat_messages" */
export type Chat_Messages_Arr_Rel_Insert_Input = {
  data: Array<Chat_Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Chat_Messages_Avg_Fields = {
  __typename?: 'chat_messages_avg_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "chat_messages" */
export type Chat_Messages_Avg_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chat_messages". All fields are combined with a logical 'AND'. */
export type Chat_Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  _not?: InputMaybe<Chat_Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Chat_Messages_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  conversation_id?: InputMaybe<Bigint_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_used?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  message_type?: InputMaybe<String_Comparison_Exp>;
  sender?: InputMaybe<String_Comparison_Exp>;
  sequence?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "chat_messages" */
export enum Chat_Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatMessagesPkey = 'chat_messages_pkey'
}

/** input type for incrementing numeric columns in table "chat_messages" */
export type Chat_Messages_Inc_Input = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消息序号 */
  sequence?: InputMaybe<Scalars['numeric']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "chat_messages" */
export type Chat_Messages_Insert_Input = {
  /** 聊天内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 关联会话ID */
  conversation_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消息类型 */
  message_type?: InputMaybe<Scalars['String']['input']>;
  /** 发送者类型 */
  sender?: InputMaybe<Scalars['String']['input']>;
  /** 消息序号 */
  sequence?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Chat_Messages_Max_Fields = {
  __typename?: 'chat_messages_max_fields';
  /** 聊天内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['bigint']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 消息类型 */
  message_type?: Maybe<Scalars['String']['output']>;
  /** 发送者类型 */
  sender?: Maybe<Scalars['String']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "chat_messages" */
export type Chat_Messages_Max_Order_By = {
  /** 聊天内容 */
  content?: InputMaybe<Order_By>;
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息类型 */
  message_type?: InputMaybe<Order_By>;
  /** 发送者类型 */
  sender?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Chat_Messages_Min_Fields = {
  __typename?: 'chat_messages_min_fields';
  /** 聊天内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['bigint']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 消息类型 */
  message_type?: Maybe<Scalars['String']['output']>;
  /** 发送者类型 */
  sender?: Maybe<Scalars['String']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "chat_messages" */
export type Chat_Messages_Min_Order_By = {
  /** 聊天内容 */
  content?: InputMaybe<Order_By>;
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息类型 */
  message_type?: InputMaybe<Order_By>;
  /** 发送者类型 */
  sender?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "chat_messages" */
export type Chat_Messages_Mutation_Response = {
  __typename?: 'chat_messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Chat_Messages>;
};

/** on_conflict condition type for table "chat_messages" */
export type Chat_Messages_On_Conflict = {
  constraint: Chat_Messages_Constraint;
  update_columns?: Array<Chat_Messages_Update_Column>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "chat_messages". */
export type Chat_Messages_Order_By = {
  content?: InputMaybe<Order_By>;
  conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message_type?: InputMaybe<Order_By>;
  sender?: InputMaybe<Order_By>;
  sequence?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: chat_messages */
export type Chat_Messages_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "chat_messages" */
export enum Chat_Messages_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditUsed = 'credit_used',
  /** column name */
  Id = 'id',
  /** column name */
  MessageType = 'message_type',
  /** column name */
  Sender = 'sender',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "chat_messages" */
export type Chat_Messages_Set_Input = {
  /** 聊天内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 关联会话ID */
  conversation_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消息类型 */
  message_type?: InputMaybe<Scalars['String']['input']>;
  /** 发送者类型 */
  sender?: InputMaybe<Scalars['String']['input']>;
  /** 消息序号 */
  sequence?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Chat_Messages_Stddev_Fields = {
  __typename?: 'chat_messages_stddev_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chat_Messages_Stddev_Pop_Fields = {
  __typename?: 'chat_messages_stddev_pop_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Pop_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chat_Messages_Stddev_Samp_Fields = {
  __typename?: 'chat_messages_stddev_samp_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "chat_messages" */
export type Chat_Messages_Stddev_Samp_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "chat_messages" */
export type Chat_Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Chat_Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Chat_Messages_Stream_Cursor_Value_Input = {
  /** 聊天内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 关联会话ID */
  conversation_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消息类型 */
  message_type?: InputMaybe<Scalars['String']['input']>;
  /** 发送者类型 */
  sender?: InputMaybe<Scalars['String']['input']>;
  /** 消息序号 */
  sequence?: InputMaybe<Scalars['numeric']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Chat_Messages_Sum_Fields = {
  __typename?: 'chat_messages_sum_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['bigint']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['numeric']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "chat_messages" */
export type Chat_Messages_Sum_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "chat_messages" */
export enum Chat_Messages_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ConversationId = 'conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditUsed = 'credit_used',
  /** column name */
  Id = 'id',
  /** column name */
  MessageType = 'message_type',
  /** column name */
  Sender = 'sender',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Chat_Messages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Chat_Messages_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Chat_Messages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Chat_Messages_Var_Pop_Fields = {
  __typename?: 'chat_messages_var_pop_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "chat_messages" */
export type Chat_Messages_Var_Pop_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chat_Messages_Var_Samp_Fields = {
  __typename?: 'chat_messages_var_samp_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "chat_messages" */
export type Chat_Messages_Var_Samp_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Chat_Messages_Variance_Fields = {
  __typename?: 'chat_messages_variance_fields';
  /** 关联会话ID */
  conversation_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗积分 */
  credit_used?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 消息序号 */
  sequence?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "chat_messages" */
export type Chat_Messages_Variance_Order_By = {
  /** 关联会话ID */
  conversation_id?: InputMaybe<Order_By>;
  /** 消耗积分 */
  credit_used?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 消息序号 */
  sequence?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** 会话表 */
export type Conversations = {
  __typename?: 'conversations';
  /** 人物id */
  character_id: Scalars['bigint']['output'];
  /** An array relationship */
  conv___messages: Array<Chat_Messages>;
  /** An aggregate relationship */
  conv___messages_aggregate: Chat_Messages_Aggregate;
  coze_conversation_id?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 互动模式ID */
  interaction_mode_id: Scalars['bigint']['output'];
  /** 最新聊天内容 */
  latest_message: Scalars['String']['output'];
  /** 场景ID */
  scene_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 用户id */
  user_id: Scalars['bigint']['output'];
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};


/** 会话表 */
export type ConversationsConv___MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


/** 会话表 */
export type ConversationsConv___Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};

/** aggregated selection of "conversations" */
export type Conversations_Aggregate = {
  __typename?: 'conversations_aggregate';
  aggregate?: Maybe<Conversations_Aggregate_Fields>;
  nodes: Array<Conversations>;
};

export type Conversations_Aggregate_Bool_Exp = {
  count?: InputMaybe<Conversations_Aggregate_Bool_Exp_Count>;
};

export type Conversations_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Conversations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Conversations_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "conversations" */
export type Conversations_Aggregate_Fields = {
  __typename?: 'conversations_aggregate_fields';
  avg?: Maybe<Conversations_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Conversations_Max_Fields>;
  min?: Maybe<Conversations_Min_Fields>;
  stddev?: Maybe<Conversations_Stddev_Fields>;
  stddev_pop?: Maybe<Conversations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Conversations_Stddev_Samp_Fields>;
  sum?: Maybe<Conversations_Sum_Fields>;
  var_pop?: Maybe<Conversations_Var_Pop_Fields>;
  var_samp?: Maybe<Conversations_Var_Samp_Fields>;
  variance?: Maybe<Conversations_Variance_Fields>;
};


/** aggregate fields of "conversations" */
export type Conversations_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Conversations_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "conversations" */
export type Conversations_Aggregate_Order_By = {
  avg?: InputMaybe<Conversations_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Conversations_Max_Order_By>;
  min?: InputMaybe<Conversations_Min_Order_By>;
  stddev?: InputMaybe<Conversations_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Conversations_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Conversations_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Conversations_Sum_Order_By>;
  var_pop?: InputMaybe<Conversations_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Conversations_Var_Samp_Order_By>;
  variance?: InputMaybe<Conversations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "conversations" */
export type Conversations_Arr_Rel_Insert_Input = {
  data: Array<Conversations_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Conversations_On_Conflict>;
};

/** aggregate avg on columns */
export type Conversations_Avg_Fields = {
  __typename?: 'conversations_avg_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "conversations" */
export type Conversations_Avg_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "conversations". All fields are combined with a logical 'AND'. */
export type Conversations_Bool_Exp = {
  _and?: InputMaybe<Array<Conversations_Bool_Exp>>;
  _not?: InputMaybe<Conversations_Bool_Exp>;
  _or?: InputMaybe<Array<Conversations_Bool_Exp>>;
  character_id?: InputMaybe<Bigint_Comparison_Exp>;
  conv___messages?: InputMaybe<Chat_Messages_Bool_Exp>;
  conv___messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Bool_Exp>;
  coze_conversation_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  interaction_mode_id?: InputMaybe<Bigint_Comparison_Exp>;
  latest_message?: InputMaybe<String_Comparison_Exp>;
  scene_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  user_role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "conversations" */
export enum Conversations_Constraint {
  /** unique or primary key constraint on columns "id" */
  ChatsPkey = 'chats_pkey'
}

/** input type for incrementing numeric columns in table "conversations" */
export type Conversations_Inc_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 场景ID */
  scene_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "conversations" */
export type Conversations_Insert_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  conv___messages?: InputMaybe<Chat_Messages_Arr_Rel_Insert_Input>;
  coze_conversation_id?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 最新聊天内容 */
  latest_message?: InputMaybe<Scalars['String']['input']>;
  /** 场景ID */
  scene_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Conversations_Max_Fields = {
  __typename?: 'conversations_max_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  coze_conversation_id?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 最新聊天内容 */
  latest_message?: Maybe<Scalars['String']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "conversations" */
export type Conversations_Max_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  coze_conversation_id?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 最新聊天内容 */
  latest_message?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
  /** 用户角色 */
  user_role?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Conversations_Min_Fields = {
  __typename?: 'conversations_min_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  coze_conversation_id?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 最新聊天内容 */
  latest_message?: Maybe<Scalars['String']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户角色 */
  user_role?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "conversations" */
export type Conversations_Min_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  coze_conversation_id?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 最新聊天内容 */
  latest_message?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
  /** 用户角色 */
  user_role?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "conversations" */
export type Conversations_Mutation_Response = {
  __typename?: 'conversations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Conversations>;
};

/** on_conflict condition type for table "conversations" */
export type Conversations_On_Conflict = {
  constraint: Conversations_Constraint;
  update_columns?: Array<Conversations_Update_Column>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};

/** Ordering options when selecting data from "conversations". */
export type Conversations_Order_By = {
  character_id?: InputMaybe<Order_By>;
  conv___messages_aggregate?: InputMaybe<Chat_Messages_Aggregate_Order_By>;
  coze_conversation_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interaction_mode_id?: InputMaybe<Order_By>;
  latest_message?: InputMaybe<Order_By>;
  scene_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: conversations */
export type Conversations_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "conversations" */
export enum Conversations_Select_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  CozeConversationId = 'coze_conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InteractionModeId = 'interaction_mode_id',
  /** column name */
  LatestMessage = 'latest_message',
  /** column name */
  SceneId = 'scene_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

/** input type for updating data in table "conversations" */
export type Conversations_Set_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  coze_conversation_id?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 最新聊天内容 */
  latest_message?: InputMaybe<Scalars['String']['input']>;
  /** 场景ID */
  scene_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Conversations_Stddev_Fields = {
  __typename?: 'conversations_stddev_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "conversations" */
export type Conversations_Stddev_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Conversations_Stddev_Pop_Fields = {
  __typename?: 'conversations_stddev_pop_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "conversations" */
export type Conversations_Stddev_Pop_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Conversations_Stddev_Samp_Fields = {
  __typename?: 'conversations_stddev_samp_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "conversations" */
export type Conversations_Stddev_Samp_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "conversations" */
export type Conversations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Conversations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Conversations_Stream_Cursor_Value_Input = {
  /** 人物id */
  character_id?: InputMaybe<Scalars['bigint']['input']>;
  coze_conversation_id?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 最新聊天内容 */
  latest_message?: InputMaybe<Scalars['String']['input']>;
  /** 场景ID */
  scene_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 用户id */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户角色 */
  user_role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Conversations_Sum_Fields = {
  __typename?: 'conversations_sum_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['bigint']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "conversations" */
export type Conversations_Sum_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "conversations" */
export enum Conversations_Update_Column {
  /** column name */
  CharacterId = 'character_id',
  /** column name */
  CozeConversationId = 'coze_conversation_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  InteractionModeId = 'interaction_mode_id',
  /** column name */
  LatestMessage = 'latest_message',
  /** column name */
  SceneId = 'scene_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  UserRole = 'user_role'
}

export type Conversations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Conversations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Conversations_Set_Input>;
  /** filter the rows which have to be updated */
  where: Conversations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Conversations_Var_Pop_Fields = {
  __typename?: 'conversations_var_pop_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "conversations" */
export type Conversations_Var_Pop_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Conversations_Var_Samp_Fields = {
  __typename?: 'conversations_var_samp_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "conversations" */
export type Conversations_Var_Samp_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Conversations_Variance_Fields = {
  __typename?: 'conversations_variance_fields';
  /** 人物id */
  character_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 互动模式ID */
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  /** 场景ID */
  scene_id?: Maybe<Scalars['Float']['output']>;
  /** 用户id */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "conversations" */
export type Conversations_Variance_Order_By = {
  /** 人物id */
  character_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 互动模式ID */
  interaction_mode_id?: InputMaybe<Order_By>;
  /** 场景ID */
  scene_id?: InputMaybe<Order_By>;
  /** 用户id */
  user_id?: InputMaybe<Order_By>;
};

/** 积分获取纪录表 */
export type Credit_Got = {
  __typename?: 'credit_got';
  /** 获取积分项目 */
  content: Scalars['String']['output'];
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 关联用户ID */
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "credit_got" */
export type Credit_Got_Aggregate = {
  __typename?: 'credit_got_aggregate';
  aggregate?: Maybe<Credit_Got_Aggregate_Fields>;
  nodes: Array<Credit_Got>;
};

export type Credit_Got_Aggregate_Bool_Exp = {
  count?: InputMaybe<Credit_Got_Aggregate_Bool_Exp_Count>;
};

export type Credit_Got_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Credit_Got_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Credit_Got_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "credit_got" */
export type Credit_Got_Aggregate_Fields = {
  __typename?: 'credit_got_aggregate_fields';
  avg?: Maybe<Credit_Got_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Credit_Got_Max_Fields>;
  min?: Maybe<Credit_Got_Min_Fields>;
  stddev?: Maybe<Credit_Got_Stddev_Fields>;
  stddev_pop?: Maybe<Credit_Got_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Credit_Got_Stddev_Samp_Fields>;
  sum?: Maybe<Credit_Got_Sum_Fields>;
  var_pop?: Maybe<Credit_Got_Var_Pop_Fields>;
  var_samp?: Maybe<Credit_Got_Var_Samp_Fields>;
  variance?: Maybe<Credit_Got_Variance_Fields>;
};


/** aggregate fields of "credit_got" */
export type Credit_Got_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Credit_Got_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "credit_got" */
export type Credit_Got_Aggregate_Order_By = {
  avg?: InputMaybe<Credit_Got_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Credit_Got_Max_Order_By>;
  min?: InputMaybe<Credit_Got_Min_Order_By>;
  stddev?: InputMaybe<Credit_Got_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Credit_Got_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Credit_Got_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Credit_Got_Sum_Order_By>;
  var_pop?: InputMaybe<Credit_Got_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Credit_Got_Var_Samp_Order_By>;
  variance?: InputMaybe<Credit_Got_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "credit_got" */
export type Credit_Got_Arr_Rel_Insert_Input = {
  data: Array<Credit_Got_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Credit_Got_On_Conflict>;
};

/** aggregate avg on columns */
export type Credit_Got_Avg_Fields = {
  __typename?: 'credit_got_avg_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "credit_got" */
export type Credit_Got_Avg_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "credit_got". All fields are combined with a logical 'AND'. */
export type Credit_Got_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Got_Bool_Exp>>;
  _not?: InputMaybe<Credit_Got_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Got_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  gold_credit?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  silver_credit?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "credit_got" */
export enum Credit_Got_Constraint {
  /** unique or primary key constraint on columns "id" */
  PointsRecordsPkey = 'points_records_pkey'
}

/** input type for incrementing numeric columns in table "credit_got" */
export type Credit_Got_Inc_Input = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "credit_got" */
export type Credit_Got_Insert_Input = {
  /** 获取积分项目 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 金积分数值 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Credit_Got_Max_Fields = {
  __typename?: 'credit_got_max_fields';
  /** 获取积分项目 */
  content?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "credit_got" */
export type Credit_Got_Max_Order_By = {
  /** 获取积分项目 */
  content?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Credit_Got_Min_Fields = {
  __typename?: 'credit_got_min_fields';
  /** 获取积分项目 */
  content?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "credit_got" */
export type Credit_Got_Min_Order_By = {
  /** 获取积分项目 */
  content?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "credit_got" */
export type Credit_Got_Mutation_Response = {
  __typename?: 'credit_got_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Credit_Got>;
};

/** on_conflict condition type for table "credit_got" */
export type Credit_Got_On_Conflict = {
  constraint: Credit_Got_Constraint;
  update_columns?: Array<Credit_Got_Update_Column>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};

/** Ordering options when selecting data from "credit_got". */
export type Credit_Got_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  silver_credit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: credit_got */
export type Credit_Got_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "credit_got" */
export enum Credit_Got_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoldCredit = 'gold_credit',
  /** column name */
  Id = 'id',
  /** column name */
  SilverCredit = 'silver_credit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "credit_got" */
export type Credit_Got_Set_Input = {
  /** 获取积分项目 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 金积分数值 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Credit_Got_Stddev_Fields = {
  __typename?: 'credit_got_stddev_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "credit_got" */
export type Credit_Got_Stddev_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Credit_Got_Stddev_Pop_Fields = {
  __typename?: 'credit_got_stddev_pop_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "credit_got" */
export type Credit_Got_Stddev_Pop_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Credit_Got_Stddev_Samp_Fields = {
  __typename?: 'credit_got_stddev_samp_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "credit_got" */
export type Credit_Got_Stddev_Samp_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "credit_got" */
export type Credit_Got_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Got_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Got_Stream_Cursor_Value_Input = {
  /** 获取积分项目 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 金积分数值 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Credit_Got_Sum_Fields = {
  __typename?: 'credit_got_sum_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "credit_got" */
export type Credit_Got_Sum_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "credit_got" */
export enum Credit_Got_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoldCredit = 'gold_credit',
  /** column name */
  Id = 'id',
  /** column name */
  SilverCredit = 'silver_credit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Credit_Got_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Credit_Got_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Credit_Got_Set_Input>;
  /** filter the rows which have to be updated */
  where: Credit_Got_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Credit_Got_Var_Pop_Fields = {
  __typename?: 'credit_got_var_pop_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "credit_got" */
export type Credit_Got_Var_Pop_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Credit_Got_Var_Samp_Fields = {
  __typename?: 'credit_got_var_samp_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "credit_got" */
export type Credit_Got_Var_Samp_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Credit_Got_Variance_Fields = {
  __typename?: 'credit_got_variance_fields';
  /** 金积分数值 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分数值 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  /** 关联用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "credit_got" */
export type Credit_Got_Variance_Order_By = {
  /** 金积分数值 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 银积分数值 */
  silver_credit?: InputMaybe<Order_By>;
  /** 关联用户ID */
  user_id?: InputMaybe<Order_By>;
};

/** 积分消耗纪录表 */
export type Credit_Used = {
  __typename?: 'credit_used';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['bigint']['output']>;
  /** 消耗金积分 */
  consumed_gold_points: Scalars['numeric']['output'];
  /** 消耗数量 */
  consumed_quantity: Scalars['numeric']['output'];
  /** 消耗银积分 */
  consumed_silver_points: Scalars['numeric']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['bigint']['output']>;
  /** 金积分余额 */
  gold_points_balance: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 银积分余额 */
  silver_points_balance: Scalars['numeric']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** 使用项目 */
  used_item?: Maybe<Scalars['String']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "credit_used" */
export type Credit_Used_Aggregate = {
  __typename?: 'credit_used_aggregate';
  aggregate?: Maybe<Credit_Used_Aggregate_Fields>;
  nodes: Array<Credit_Used>;
};

/** aggregate fields of "credit_used" */
export type Credit_Used_Aggregate_Fields = {
  __typename?: 'credit_used_aggregate_fields';
  avg?: Maybe<Credit_Used_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Credit_Used_Max_Fields>;
  min?: Maybe<Credit_Used_Min_Fields>;
  stddev?: Maybe<Credit_Used_Stddev_Fields>;
  stddev_pop?: Maybe<Credit_Used_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Credit_Used_Stddev_Samp_Fields>;
  sum?: Maybe<Credit_Used_Sum_Fields>;
  var_pop?: Maybe<Credit_Used_Var_Pop_Fields>;
  var_samp?: Maybe<Credit_Used_Var_Samp_Fields>;
  variance?: Maybe<Credit_Used_Variance_Fields>;
};


/** aggregate fields of "credit_used" */
export type Credit_Used_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Credit_Used_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Credit_Used_Avg_Fields = {
  __typename?: 'credit_used_avg_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "credit_used". All fields are combined with a logical 'AND'. */
export type Credit_Used_Bool_Exp = {
  _and?: InputMaybe<Array<Credit_Used_Bool_Exp>>;
  _not?: InputMaybe<Credit_Used_Bool_Exp>;
  _or?: InputMaybe<Array<Credit_Used_Bool_Exp>>;
  chat_message_id?: InputMaybe<Bigint_Comparison_Exp>;
  consumed_gold_points?: InputMaybe<Numeric_Comparison_Exp>;
  consumed_quantity?: InputMaybe<Numeric_Comparison_Exp>;
  consumed_silver_points?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft_id?: InputMaybe<Bigint_Comparison_Exp>;
  gold_points_balance?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  silver_points_balance?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  used_item?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "credit_used" */
export enum Credit_Used_Constraint {
  /** unique or primary key constraint on columns "id" */
  PointConsumptionsPkey = 'point_consumptions_pkey'
}

/** input type for incrementing numeric columns in table "credit_used" */
export type Credit_Used_Inc_Input = {
  /** 关联聊天纪录 */
  chat_message_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消耗金积分 */
  consumed_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗数量 */
  consumed_quantity?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗银积分 */
  consumed_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 关联草稿箱 */
  draft_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 金积分余额 */
  gold_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分余额 */
  silver_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "credit_used" */
export type Credit_Used_Insert_Input = {
  /** 关联聊天纪录 */
  chat_message_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消耗金积分 */
  consumed_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗数量 */
  consumed_quantity?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗银积分 */
  consumed_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联草稿箱 */
  draft_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 金积分余额 */
  gold_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分余额 */
  silver_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用项目 */
  used_item?: InputMaybe<Scalars['String']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Credit_Used_Max_Fields = {
  __typename?: 'credit_used_max_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['bigint']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['numeric']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['bigint']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用项目 */
  used_item?: Maybe<Scalars['String']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Credit_Used_Min_Fields = {
  __typename?: 'credit_used_min_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['bigint']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['numeric']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['bigint']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用项目 */
  used_item?: Maybe<Scalars['String']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "credit_used" */
export type Credit_Used_Mutation_Response = {
  __typename?: 'credit_used_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Credit_Used>;
};

/** input type for inserting object relation for remote table "credit_used" */
export type Credit_Used_Obj_Rel_Insert_Input = {
  data: Credit_Used_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Credit_Used_On_Conflict>;
};

/** on_conflict condition type for table "credit_used" */
export type Credit_Used_On_Conflict = {
  constraint: Credit_Used_Constraint;
  update_columns?: Array<Credit_Used_Update_Column>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};

/** Ordering options when selecting data from "credit_used". */
export type Credit_Used_Order_By = {
  chat_message_id?: InputMaybe<Order_By>;
  consumed_gold_points?: InputMaybe<Order_By>;
  consumed_quantity?: InputMaybe<Order_By>;
  consumed_silver_points?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft_id?: InputMaybe<Order_By>;
  gold_points_balance?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  silver_points_balance?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  used_item?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: credit_used */
export type Credit_Used_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "credit_used" */
export enum Credit_Used_Select_Column {
  /** column name */
  ChatMessageId = 'chat_message_id',
  /** column name */
  ConsumedGoldPoints = 'consumed_gold_points',
  /** column name */
  ConsumedQuantity = 'consumed_quantity',
  /** column name */
  ConsumedSilverPoints = 'consumed_silver_points',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  GoldPointsBalance = 'gold_points_balance',
  /** column name */
  Id = 'id',
  /** column name */
  SilverPointsBalance = 'silver_points_balance',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsedItem = 'used_item',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "credit_used" */
export type Credit_Used_Set_Input = {
  /** 关联聊天纪录 */
  chat_message_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消耗金积分 */
  consumed_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗数量 */
  consumed_quantity?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗银积分 */
  consumed_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联草稿箱 */
  draft_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 金积分余额 */
  gold_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分余额 */
  silver_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用项目 */
  used_item?: InputMaybe<Scalars['String']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Credit_Used_Stddev_Fields = {
  __typename?: 'credit_used_stddev_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Credit_Used_Stddev_Pop_Fields = {
  __typename?: 'credit_used_stddev_pop_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Credit_Used_Stddev_Samp_Fields = {
  __typename?: 'credit_used_stddev_samp_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "credit_used" */
export type Credit_Used_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Credit_Used_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Credit_Used_Stream_Cursor_Value_Input = {
  /** 关联聊天纪录 */
  chat_message_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 消耗金积分 */
  consumed_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗数量 */
  consumed_quantity?: InputMaybe<Scalars['numeric']['input']>;
  /** 消耗银积分 */
  consumed_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 关联草稿箱 */
  draft_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 金积分余额 */
  gold_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分余额 */
  silver_points_balance?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用项目 */
  used_item?: InputMaybe<Scalars['String']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Credit_Used_Sum_Fields = {
  __typename?: 'credit_used_sum_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['bigint']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['numeric']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['numeric']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['bigint']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['numeric']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "credit_used" */
export enum Credit_Used_Update_Column {
  /** column name */
  ChatMessageId = 'chat_message_id',
  /** column name */
  ConsumedGoldPoints = 'consumed_gold_points',
  /** column name */
  ConsumedQuantity = 'consumed_quantity',
  /** column name */
  ConsumedSilverPoints = 'consumed_silver_points',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DraftId = 'draft_id',
  /** column name */
  GoldPointsBalance = 'gold_points_balance',
  /** column name */
  Id = 'id',
  /** column name */
  SilverPointsBalance = 'silver_points_balance',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UsedItem = 'used_item',
  /** column name */
  UserId = 'user_id'
}

export type Credit_Used_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Credit_Used_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Credit_Used_Set_Input>;
  /** filter the rows which have to be updated */
  where: Credit_Used_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Credit_Used_Var_Pop_Fields = {
  __typename?: 'credit_used_var_pop_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Credit_Used_Var_Samp_Fields = {
  __typename?: 'credit_used_var_samp_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Credit_Used_Variance_Fields = {
  __typename?: 'credit_used_variance_fields';
  /** 关联聊天纪录 */
  chat_message_id?: Maybe<Scalars['Float']['output']>;
  /** 消耗金积分 */
  consumed_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 消耗数量 */
  consumed_quantity?: Maybe<Scalars['Float']['output']>;
  /** 消耗银积分 */
  consumed_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 关联草稿箱 */
  draft_id?: Maybe<Scalars['Float']['output']>;
  /** 金积分余额 */
  gold_points_balance?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_points_balance?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** 发现AI表 */
export type ExploreAi = {
  __typename?: 'exploreAI';
  created_at: Scalars['timestamptz']['output'];
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['bigint']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "exploreAI" */
export type ExploreAi_Aggregate = {
  __typename?: 'exploreAI_aggregate';
  aggregate?: Maybe<ExploreAi_Aggregate_Fields>;
  nodes: Array<ExploreAi>;
};

/** aggregate fields of "exploreAI" */
export type ExploreAi_Aggregate_Fields = {
  __typename?: 'exploreAI_aggregate_fields';
  avg?: Maybe<ExploreAi_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ExploreAi_Max_Fields>;
  min?: Maybe<ExploreAi_Min_Fields>;
  stddev?: Maybe<ExploreAi_Stddev_Fields>;
  stddev_pop?: Maybe<ExploreAi_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<ExploreAi_Stddev_Samp_Fields>;
  sum?: Maybe<ExploreAi_Sum_Fields>;
  var_pop?: Maybe<ExploreAi_Var_Pop_Fields>;
  var_samp?: Maybe<ExploreAi_Var_Samp_Fields>;
  variance?: Maybe<ExploreAi_Variance_Fields>;
};


/** aggregate fields of "exploreAI" */
export type ExploreAi_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<ExploreAi_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ExploreAi_Avg_Fields = {
  __typename?: 'exploreAI_avg_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "exploreAI". All fields are combined with a logical 'AND'. */
export type ExploreAi_Bool_Exp = {
  _and?: InputMaybe<Array<ExploreAi_Bool_Exp>>;
  _not?: InputMaybe<ExploreAi_Bool_Exp>;
  _or?: InputMaybe<Array<ExploreAi_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "exploreAI" */
export enum ExploreAi_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExploreAiPkey = 'exploreAI_pkey'
}

/** input type for incrementing numeric columns in table "exploreAI" */
export type ExploreAi_Inc_Input = {
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  sort?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "exploreAI" */
export type ExploreAi_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type ExploreAi_Max_Fields = {
  __typename?: 'exploreAI_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['bigint']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type ExploreAi_Min_Fields = {
  __typename?: 'exploreAI_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sort?: Maybe<Scalars['bigint']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "exploreAI" */
export type ExploreAi_Mutation_Response = {
  __typename?: 'exploreAI_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ExploreAi>;
};

/** on_conflict condition type for table "exploreAI" */
export type ExploreAi_On_Conflict = {
  constraint: ExploreAi_Constraint;
  update_columns?: Array<ExploreAi_Update_Column>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};

/** Ordering options when selecting data from "exploreAI". */
export type ExploreAi_Order_By = {
  created_at?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exploreAI */
export type ExploreAi_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "exploreAI" */
export enum ExploreAi_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exploreAI" */
export type ExploreAi_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type ExploreAi_Stddev_Fields = {
  __typename?: 'exploreAI_stddev_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ExploreAi_Stddev_Pop_Fields = {
  __typename?: 'exploreAI_stddev_pop_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ExploreAi_Stddev_Samp_Fields = {
  __typename?: 'exploreAI_stddev_samp_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "exploreAI" */
export type ExploreAi_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: ExploreAi_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type ExploreAi_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type ExploreAi_Sum_Fields = {
  __typename?: 'exploreAI_sum_fields';
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  sort?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "exploreAI" */
export enum ExploreAi_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type ExploreAi_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ExploreAi_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExploreAi_Set_Input>;
  /** filter the rows which have to be updated */
  where: ExploreAi_Bool_Exp;
};

/** aggregate var_pop on columns */
export type ExploreAi_Var_Pop_Fields = {
  __typename?: 'exploreAI_var_pop_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ExploreAi_Var_Samp_Fields = {
  __typename?: 'exploreAI_var_samp_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ExploreAi_Variance_Fields = {
  __typename?: 'exploreAI_variance_fields';
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** 生成任务表 */
export type Gen_Tasks = {
  __typename?: 'gen_tasks';
  /** RH任务ID */
  RH_task_id?: Maybe<Scalars['String']['output']>;
  /** RH工作流ID */
  RHflow?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分数 */
  credit_cost: Scalars['bigint']['output'];
  /** 图片高度 */
  height: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 图片URL */
  image_url: Scalars['String']['output'];
  /** 媒体URL */
  media_url: Scalars['String']['output'];
  /** 生图模型ID */
  model_id: Scalars['bigint']['output'];
  /** 梦幻人物ID */
  person_id: Scalars['bigint']['output'];
  /** 固定姿态ID */
  pose_id: Scalars['bigint']['output'];
  /** 任务状态 */
  status: Scalars['String']['output'];
  /** 梦幻套装ID */
  suit_id: Scalars['bigint']['output'];
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 所属用户ID */
  user_id: Scalars['bigint']['output'];
  /** 图片宽度 */
  width: Scalars['numeric']['output'];
};

/** aggregated selection of "gen_tasks" */
export type Gen_Tasks_Aggregate = {
  __typename?: 'gen_tasks_aggregate';
  aggregate?: Maybe<Gen_Tasks_Aggregate_Fields>;
  nodes: Array<Gen_Tasks>;
};

export type Gen_Tasks_Aggregate_Bool_Exp = {
  count?: InputMaybe<Gen_Tasks_Aggregate_Bool_Exp_Count>;
};

export type Gen_Tasks_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Gen_Tasks_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "gen_tasks" */
export type Gen_Tasks_Aggregate_Fields = {
  __typename?: 'gen_tasks_aggregate_fields';
  avg?: Maybe<Gen_Tasks_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Gen_Tasks_Max_Fields>;
  min?: Maybe<Gen_Tasks_Min_Fields>;
  stddev?: Maybe<Gen_Tasks_Stddev_Fields>;
  stddev_pop?: Maybe<Gen_Tasks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Gen_Tasks_Stddev_Samp_Fields>;
  sum?: Maybe<Gen_Tasks_Sum_Fields>;
  var_pop?: Maybe<Gen_Tasks_Var_Pop_Fields>;
  var_samp?: Maybe<Gen_Tasks_Var_Samp_Fields>;
  variance?: Maybe<Gen_Tasks_Variance_Fields>;
};


/** aggregate fields of "gen_tasks" */
export type Gen_Tasks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "gen_tasks" */
export type Gen_Tasks_Aggregate_Order_By = {
  avg?: InputMaybe<Gen_Tasks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Gen_Tasks_Max_Order_By>;
  min?: InputMaybe<Gen_Tasks_Min_Order_By>;
  stddev?: InputMaybe<Gen_Tasks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Gen_Tasks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Gen_Tasks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Gen_Tasks_Sum_Order_By>;
  var_pop?: InputMaybe<Gen_Tasks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Gen_Tasks_Var_Samp_Order_By>;
  variance?: InputMaybe<Gen_Tasks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "gen_tasks" */
export type Gen_Tasks_Arr_Rel_Insert_Input = {
  data: Array<Gen_Tasks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Gen_Tasks_On_Conflict>;
};

/** aggregate avg on columns */
export type Gen_Tasks_Avg_Fields = {
  __typename?: 'gen_tasks_avg_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "gen_tasks" */
export type Gen_Tasks_Avg_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "gen_tasks". All fields are combined with a logical 'AND'. */
export type Gen_Tasks_Bool_Exp = {
  RH_task_id?: InputMaybe<String_Comparison_Exp>;
  RHflow?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Gen_Tasks_Bool_Exp>>;
  _not?: InputMaybe<Gen_Tasks_Bool_Exp>;
  _or?: InputMaybe<Array<Gen_Tasks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cost?: InputMaybe<Bigint_Comparison_Exp>;
  height?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  media_url?: InputMaybe<String_Comparison_Exp>;
  model_id?: InputMaybe<Bigint_Comparison_Exp>;
  person_id?: InputMaybe<Bigint_Comparison_Exp>;
  pose_id?: InputMaybe<Bigint_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  suit_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  width?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "gen_tasks" */
export enum Gen_Tasks_Constraint {
  /** unique or primary key constraint on columns "id" */
  DraftsPkey = 'drafts_pkey'
}

/** input type for incrementing numeric columns in table "gen_tasks" */
export type Gen_Tasks_Inc_Input = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片高度 */
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 生图模型ID */
  model_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 所属用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片宽度 */
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "gen_tasks" */
export type Gen_Tasks_Insert_Input = {
  /** RH任务ID */
  RH_task_id?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流ID */
  RHflow?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片高度 */
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 媒体URL */
  media_url?: InputMaybe<Scalars['String']['input']>;
  /** 生图模型ID */
  model_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 任务状态 */
  status?: InputMaybe<Scalars['String']['input']>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片宽度 */
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Gen_Tasks_Max_Fields = {
  __typename?: 'gen_tasks_max_fields';
  /** RH任务ID */
  RH_task_id?: Maybe<Scalars['String']['output']>;
  /** RH工作流ID */
  RHflow?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 媒体URL */
  media_url?: Maybe<Scalars['String']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['bigint']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['bigint']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['bigint']['output']>;
  /** 任务状态 */
  status?: Maybe<Scalars['String']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "gen_tasks" */
export type Gen_Tasks_Max_Order_By = {
  /** RH任务ID */
  RH_task_id?: InputMaybe<Order_By>;
  /** RH工作流ID */
  RHflow?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 图片URL */
  image_url?: InputMaybe<Order_By>;
  /** 媒体URL */
  media_url?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 任务状态 */
  status?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Gen_Tasks_Min_Fields = {
  __typename?: 'gen_tasks_min_fields';
  /** RH任务ID */
  RH_task_id?: Maybe<Scalars['String']['output']>;
  /** RH工作流ID */
  RHflow?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 媒体URL */
  media_url?: Maybe<Scalars['String']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['bigint']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['bigint']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['bigint']['output']>;
  /** 任务状态 */
  status?: Maybe<Scalars['String']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "gen_tasks" */
export type Gen_Tasks_Min_Order_By = {
  /** RH任务ID */
  RH_task_id?: InputMaybe<Order_By>;
  /** RH工作流ID */
  RHflow?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 图片URL */
  image_url?: InputMaybe<Order_By>;
  /** 媒体URL */
  media_url?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 任务状态 */
  status?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "gen_tasks" */
export type Gen_Tasks_Mutation_Response = {
  __typename?: 'gen_tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Gen_Tasks>;
};

/** input type for inserting object relation for remote table "gen_tasks" */
export type Gen_Tasks_Obj_Rel_Insert_Input = {
  data: Gen_Tasks_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Gen_Tasks_On_Conflict>;
};

/** on_conflict condition type for table "gen_tasks" */
export type Gen_Tasks_On_Conflict = {
  constraint: Gen_Tasks_Constraint;
  update_columns?: Array<Gen_Tasks_Update_Column>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "gen_tasks". */
export type Gen_Tasks_Order_By = {
  RH_task_id?: InputMaybe<Order_By>;
  RHflow?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_cost?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  media_url?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  pose_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  suit_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: gen_tasks */
export type Gen_Tasks_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "gen_tasks" */
export enum Gen_Tasks_Select_Column {
  /** column name */
  RhTaskId = 'RH_task_id',
  /** column name */
  RHflow = 'RHflow',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  PoseId = 'pose_id',
  /** column name */
  Status = 'status',
  /** column name */
  SuitId = 'suit_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "gen_tasks" */
export type Gen_Tasks_Set_Input = {
  /** RH任务ID */
  RH_task_id?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流ID */
  RHflow?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片高度 */
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 媒体URL */
  media_url?: InputMaybe<Scalars['String']['input']>;
  /** 生图模型ID */
  model_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 任务状态 */
  status?: InputMaybe<Scalars['String']['input']>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片宽度 */
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Gen_Tasks_Stddev_Fields = {
  __typename?: 'gen_tasks_stddev_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "gen_tasks" */
export type Gen_Tasks_Stddev_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Gen_Tasks_Stddev_Pop_Fields = {
  __typename?: 'gen_tasks_stddev_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "gen_tasks" */
export type Gen_Tasks_Stddev_Pop_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Gen_Tasks_Stddev_Samp_Fields = {
  __typename?: 'gen_tasks_stddev_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "gen_tasks" */
export type Gen_Tasks_Stddev_Samp_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "gen_tasks" */
export type Gen_Tasks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Gen_Tasks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Gen_Tasks_Stream_Cursor_Value_Input = {
  /** RH任务ID */
  RH_task_id?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流ID */
  RHflow?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片高度 */
  height?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 媒体URL */
  media_url?: InputMaybe<Scalars['String']['input']>;
  /** 生图模型ID */
  model_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 任务状态 */
  status?: InputMaybe<Scalars['String']['input']>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户ID */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片宽度 */
  width?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Gen_Tasks_Sum_Fields = {
  __typename?: 'gen_tasks_sum_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['bigint']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['bigint']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['bigint']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['bigint']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['bigint']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "gen_tasks" */
export type Gen_Tasks_Sum_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** update columns of table "gen_tasks" */
export enum Gen_Tasks_Update_Column {
  /** column name */
  RhTaskId = 'RH_task_id',
  /** column name */
  RHflow = 'RHflow',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  MediaUrl = 'media_url',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  PoseId = 'pose_id',
  /** column name */
  Status = 'status',
  /** column name */
  SuitId = 'suit_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Width = 'width'
}

export type Gen_Tasks_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Gen_Tasks_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Gen_Tasks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Gen_Tasks_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Gen_Tasks_Var_Pop_Fields = {
  __typename?: 'gen_tasks_var_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "gen_tasks" */
export type Gen_Tasks_Var_Pop_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Gen_Tasks_Var_Samp_Fields = {
  __typename?: 'gen_tasks_var_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "gen_tasks" */
export type Gen_Tasks_Var_Samp_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Gen_Tasks_Variance_Fields = {
  __typename?: 'gen_tasks_variance_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 生图模型ID */
  model_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻人物ID */
  person_id?: Maybe<Scalars['Float']['output']>;
  /** 固定姿态ID */
  pose_id?: Maybe<Scalars['Float']['output']>;
  /** 梦幻套装ID */
  suit_id?: Maybe<Scalars['Float']['output']>;
  /** 所属用户ID */
  user_id?: Maybe<Scalars['Float']['output']>;
  /** 图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "gen_tasks" */
export type Gen_Tasks_Variance_Order_By = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Order_By>;
  /** 图片高度 */
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 生图模型ID */
  model_id?: InputMaybe<Order_By>;
  /** 梦幻人物ID */
  person_id?: InputMaybe<Order_By>;
  /** 固定姿态ID */
  pose_id?: InputMaybe<Order_By>;
  /** 梦幻套装ID */
  suit_id?: InputMaybe<Order_By>;
  /** 所属用户ID */
  user_id?: InputMaybe<Order_By>;
  /** 图片宽度 */
  width?: InputMaybe<Order_By>;
};

/** 全局参数表 */
export type Global_Params = {
  __typename?: 'global_params';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['float8']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['bigint']['output']>;
  /** 参数值_文本 */
  value_text?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "global_params" */
export type Global_Params_Aggregate = {
  __typename?: 'global_params_aggregate';
  aggregate?: Maybe<Global_Params_Aggregate_Fields>;
  nodes: Array<Global_Params>;
};

/** aggregate fields of "global_params" */
export type Global_Params_Aggregate_Fields = {
  __typename?: 'global_params_aggregate_fields';
  avg?: Maybe<Global_Params_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Global_Params_Max_Fields>;
  min?: Maybe<Global_Params_Min_Fields>;
  stddev?: Maybe<Global_Params_Stddev_Fields>;
  stddev_pop?: Maybe<Global_Params_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Global_Params_Stddev_Samp_Fields>;
  sum?: Maybe<Global_Params_Sum_Fields>;
  var_pop?: Maybe<Global_Params_Var_Pop_Fields>;
  var_samp?: Maybe<Global_Params_Var_Samp_Fields>;
  variance?: Maybe<Global_Params_Variance_Fields>;
};


/** aggregate fields of "global_params" */
export type Global_Params_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Global_Params_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Global_Params_Avg_Fields = {
  __typename?: 'global_params_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "global_params". All fields are combined with a logical 'AND'. */
export type Global_Params_Bool_Exp = {
  _and?: InputMaybe<Array<Global_Params_Bool_Exp>>;
  _not?: InputMaybe<Global_Params_Bool_Exp>;
  _or?: InputMaybe<Array<Global_Params_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value_decimal?: InputMaybe<Float8_Comparison_Exp>;
  value_int?: InputMaybe<Bigint_Comparison_Exp>;
  value_text?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "global_params" */
export enum Global_Params_Constraint {
  /** unique or primary key constraint on columns "id" */
  GlobalParamsPkey = 'global_params_pkey'
}

/** input type for incrementing numeric columns in table "global_params" */
export type Global_Params_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 参数值_小数 */
  value_decimal?: InputMaybe<Scalars['float8']['input']>;
  /** 参数值_整型 */
  value_int?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "global_params" */
export type Global_Params_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 参数值_小数 */
  value_decimal?: InputMaybe<Scalars['float8']['input']>;
  /** 参数值_整型 */
  value_int?: InputMaybe<Scalars['bigint']['input']>;
  /** 参数值_文本 */
  value_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Global_Params_Max_Fields = {
  __typename?: 'global_params_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['float8']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['bigint']['output']>;
  /** 参数值_文本 */
  value_text?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Global_Params_Min_Fields = {
  __typename?: 'global_params_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['float8']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['bigint']['output']>;
  /** 参数值_文本 */
  value_text?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "global_params" */
export type Global_Params_Mutation_Response = {
  __typename?: 'global_params_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Global_Params>;
};

/** on_conflict condition type for table "global_params" */
export type Global_Params_On_Conflict = {
  constraint: Global_Params_Constraint;
  update_columns?: Array<Global_Params_Update_Column>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};

/** Ordering options when selecting data from "global_params". */
export type Global_Params_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value_decimal?: InputMaybe<Order_By>;
  value_int?: InputMaybe<Order_By>;
  value_text?: InputMaybe<Order_By>;
};

/** primary key columns input for table: global_params */
export type Global_Params_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "global_params" */
export enum Global_Params_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValueDecimal = 'value_decimal',
  /** column name */
  ValueInt = 'value_int',
  /** column name */
  ValueText = 'value_text'
}

/** input type for updating data in table "global_params" */
export type Global_Params_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 参数值_小数 */
  value_decimal?: InputMaybe<Scalars['float8']['input']>;
  /** 参数值_整型 */
  value_int?: InputMaybe<Scalars['bigint']['input']>;
  /** 参数值_文本 */
  value_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Global_Params_Stddev_Fields = {
  __typename?: 'global_params_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Global_Params_Stddev_Pop_Fields = {
  __typename?: 'global_params_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Global_Params_Stddev_Samp_Fields = {
  __typename?: 'global_params_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "global_params" */
export type Global_Params_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Global_Params_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Global_Params_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 参数值_小数 */
  value_decimal?: InputMaybe<Scalars['float8']['input']>;
  /** 参数值_整型 */
  value_int?: InputMaybe<Scalars['bigint']['input']>;
  /** 参数值_文本 */
  value_text?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Global_Params_Sum_Fields = {
  __typename?: 'global_params_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['float8']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "global_params" */
export enum Global_Params_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ValueDecimal = 'value_decimal',
  /** column name */
  ValueInt = 'value_int',
  /** column name */
  ValueText = 'value_text'
}

export type Global_Params_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Global_Params_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Global_Params_Set_Input>;
  /** filter the rows which have to be updated */
  where: Global_Params_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Global_Params_Var_Pop_Fields = {
  __typename?: 'global_params_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Global_Params_Var_Samp_Fields = {
  __typename?: 'global_params_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Global_Params_Variance_Fields = {
  __typename?: 'global_params_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 参数值_小数 */
  value_decimal?: Maybe<Scalars['Float']['output']>;
  /** 参数值_整型 */
  value_int?: Maybe<Scalars['Float']['output']>;
};

/** 生图模型表 */
export type Image_Models = {
  __typename?: 'image_models';
  /** RH工作流1 */
  RHflow_id1?: Maybe<Scalars['String']['output']>;
  /** RH工作流2 */
  RHflow_id2?: Maybe<Scalars['String']['output']>;
  /** 使用的基础模型 */
  base_model?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['Int']['output'];
  /** 风格图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 高清 */
  is_HD?: Maybe<Scalars['Boolean']['output']>;
  lora?: Maybe<Scalars['String']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 风格名称 */
  name: Scalars['String']['output'];
  /** 反向词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向补充词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "image_models" */
export type Image_Models_Aggregate = {
  __typename?: 'image_models_aggregate';
  aggregate?: Maybe<Image_Models_Aggregate_Fields>;
  nodes: Array<Image_Models>;
};

/** aggregate fields of "image_models" */
export type Image_Models_Aggregate_Fields = {
  __typename?: 'image_models_aggregate_fields';
  avg?: Maybe<Image_Models_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Image_Models_Max_Fields>;
  min?: Maybe<Image_Models_Min_Fields>;
  stddev?: Maybe<Image_Models_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Models_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Models_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Models_Sum_Fields>;
  var_pop?: Maybe<Image_Models_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Models_Var_Samp_Fields>;
  variance?: Maybe<Image_Models_Variance_Fields>;
};


/** aggregate fields of "image_models" */
export type Image_Models_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Image_Models_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Image_Models_Avg_Fields = {
  __typename?: 'image_models_avg_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "image_models". All fields are combined with a logical 'AND'. */
export type Image_Models_Bool_Exp = {
  RHflow_id1?: InputMaybe<String_Comparison_Exp>;
  RHflow_id2?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Image_Models_Bool_Exp>>;
  _not?: InputMaybe<Image_Models_Bool_Exp>;
  _or?: InputMaybe<Array<Image_Models_Bool_Exp>>;
  base_model?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cost?: InputMaybe<Bigint_Comparison_Exp>;
  display_level?: InputMaybe<Bigint_Comparison_Exp>;
  height?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_HD?: InputMaybe<Boolean_Comparison_Exp>;
  lora?: InputMaybe<String_Comparison_Exp>;
  lora_weight?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  negative_prompt?: InputMaybe<String_Comparison_Exp>;
  positive_prompt?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
  width?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "image_models" */
export enum Image_Models_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModelStylesPkey = 'model_styles_pkey'
}

/** input type for incrementing numeric columns in table "image_models" */
export type Image_Models_Inc_Input = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片高度 */
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片宽度 */
  width?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "image_models" */
export type Image_Models_Insert_Input = {
  /** RH工作流1 */
  RHflow_id1?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流2 */
  RHflow_id2?: InputMaybe<Scalars['String']['input']>;
  /** 使用的基础模型 */
  base_model?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片高度 */
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 风格图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  lora?: InputMaybe<Scalars['String']['input']>;
  /** 模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 风格名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向补充词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片宽度 */
  width?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Image_Models_Max_Fields = {
  __typename?: 'image_models_max_fields';
  /** RH工作流1 */
  RHflow_id1?: Maybe<Scalars['String']['output']>;
  /** RH工作流2 */
  RHflow_id2?: Maybe<Scalars['String']['output']>;
  /** 使用的基础模型 */
  base_model?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 风格图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  lora?: Maybe<Scalars['String']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 风格名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向补充词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Image_Models_Min_Fields = {
  __typename?: 'image_models_min_fields';
  /** RH工作流1 */
  RHflow_id1?: Maybe<Scalars['String']['output']>;
  /** RH工作流2 */
  RHflow_id2?: Maybe<Scalars['String']['output']>;
  /** 使用的基础模型 */
  base_model?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 风格图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  lora?: Maybe<Scalars['String']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 风格名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向补充词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "image_models" */
export type Image_Models_Mutation_Response = {
  __typename?: 'image_models_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Image_Models>;
};

/** on_conflict condition type for table "image_models" */
export type Image_Models_On_Conflict = {
  constraint: Image_Models_Constraint;
  update_columns?: Array<Image_Models_Update_Column>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};

/** Ordering options when selecting data from "image_models". */
export type Image_Models_Order_By = {
  RHflow_id1?: InputMaybe<Order_By>;
  RHflow_id2?: InputMaybe<Order_By>;
  base_model?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  credit_cost?: InputMaybe<Order_By>;
  display_level?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_HD?: InputMaybe<Order_By>;
  lora?: InputMaybe<Order_By>;
  lora_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  negative_prompt?: InputMaybe<Order_By>;
  positive_prompt?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: image_models */
export type Image_Models_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "image_models" */
export enum Image_Models_Select_Column {
  /** column name */
  RHflowId1 = 'RHflow_id1',
  /** column name */
  RHflowId2 = 'RHflow_id2',
  /** column name */
  BaseModel = 'base_model',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DisplayLevel = 'display_level',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "image_models" */
export type Image_Models_Set_Input = {
  /** RH工作流1 */
  RHflow_id1?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流2 */
  RHflow_id2?: InputMaybe<Scalars['String']['input']>;
  /** 使用的基础模型 */
  base_model?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片高度 */
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 风格图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  lora?: InputMaybe<Scalars['String']['input']>;
  /** 模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 风格名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向补充词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片宽度 */
  width?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Image_Models_Stddev_Fields = {
  __typename?: 'image_models_stddev_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Image_Models_Stddev_Pop_Fields = {
  __typename?: 'image_models_stddev_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Image_Models_Stddev_Samp_Fields = {
  __typename?: 'image_models_stddev_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "image_models" */
export type Image_Models_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Image_Models_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Image_Models_Stream_Cursor_Value_Input = {
  /** RH工作流1 */
  RHflow_id1?: InputMaybe<Scalars['String']['input']>;
  /** RH工作流2 */
  RHflow_id2?: InputMaybe<Scalars['String']['input']>;
  /** 使用的基础模型 */
  base_model?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片高度 */
  height?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** 风格图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  lora?: InputMaybe<Scalars['String']['input']>;
  /** 模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 风格名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向补充词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
  /** 生成图片宽度 */
  width?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Image_Models_Sum_Fields = {
  __typename?: 'image_models_sum_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['bigint']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "image_models" */
export enum Image_Models_Update_Column {
  /** column name */
  RHflowId1 = 'RHflow_id1',
  /** column name */
  RHflowId2 = 'RHflow_id2',
  /** column name */
  BaseModel = 'base_model',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DisplayLevel = 'display_level',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level',
  /** column name */
  Width = 'width'
}

export type Image_Models_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Image_Models_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Image_Models_Set_Input>;
  /** filter the rows which have to be updated */
  where: Image_Models_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Image_Models_Var_Pop_Fields = {
  __typename?: 'image_models_var_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Image_Models_Var_Samp_Fields = {
  __typename?: 'image_models_var_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Image_Models_Variance_Fields = {
  __typename?: 'image_models_variance_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  /** 显示等级（对什么级别以上的会员显示） */
  display_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片高度 */
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级（什么级别以上的会员可用） */
  use_level?: Maybe<Scalars['Float']['output']>;
  /** 生成图片宽度 */
  width?: Maybe<Scalars['Float']['output']>;
};

/** 互动模式 */
export type Interaction_Modes = {
  __typename?: 'interaction_modes';
  /** 内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 消耗水晶数 */
  cost_crystal: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** An array relationship */
  intr___conv: Array<Conversations>;
  /** An aggregate relationship */
  intr___conv_aggregate: Conversations_Aggregate;
  /** 是否隐藏 */
  is_hide: Scalars['Boolean']['output'];
  /** 名称 */
  name: Scalars['String']['output'];
  /** 排序 */
  order_sort?: Maybe<Scalars['numeric']['output']>;
};


/** 互动模式 */
export type Interaction_ModesIntr___ConvArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


/** 互动模式 */
export type Interaction_ModesIntr___Conv_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};

/** aggregated selection of "interaction_modes" */
export type Interaction_Modes_Aggregate = {
  __typename?: 'interaction_modes_aggregate';
  aggregate?: Maybe<Interaction_Modes_Aggregate_Fields>;
  nodes: Array<Interaction_Modes>;
};

/** aggregate fields of "interaction_modes" */
export type Interaction_Modes_Aggregate_Fields = {
  __typename?: 'interaction_modes_aggregate_fields';
  avg?: Maybe<Interaction_Modes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Interaction_Modes_Max_Fields>;
  min?: Maybe<Interaction_Modes_Min_Fields>;
  stddev?: Maybe<Interaction_Modes_Stddev_Fields>;
  stddev_pop?: Maybe<Interaction_Modes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Interaction_Modes_Stddev_Samp_Fields>;
  sum?: Maybe<Interaction_Modes_Sum_Fields>;
  var_pop?: Maybe<Interaction_Modes_Var_Pop_Fields>;
  var_samp?: Maybe<Interaction_Modes_Var_Samp_Fields>;
  variance?: Maybe<Interaction_Modes_Variance_Fields>;
};


/** aggregate fields of "interaction_modes" */
export type Interaction_Modes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Interaction_Modes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Interaction_Modes_Avg_Fields = {
  __typename?: 'interaction_modes_avg_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "interaction_modes". All fields are combined with a logical 'AND'. */
export type Interaction_Modes_Bool_Exp = {
  _and?: InputMaybe<Array<Interaction_Modes_Bool_Exp>>;
  _not?: InputMaybe<Interaction_Modes_Bool_Exp>;
  _or?: InputMaybe<Array<Interaction_Modes_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  cost_crystal?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  intr___conv?: InputMaybe<Conversations_Bool_Exp>;
  intr___conv_aggregate?: InputMaybe<Conversations_Aggregate_Bool_Exp>;
  is_hide?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  order_sort?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "interaction_modes" */
export enum Interaction_Modes_Constraint {
  /** unique or primary key constraint on columns "id" */
  InteractiveModesPkey = 'interactive_modes_pkey'
}

/** input type for incrementing numeric columns in table "interaction_modes" */
export type Interaction_Modes_Inc_Input = {
  /** 消耗水晶数 */
  cost_crystal?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  order_sort?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "interaction_modes" */
export type Interaction_Modes_Insert_Input = {
  /** 内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 消耗水晶数 */
  cost_crystal?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  intr___conv?: InputMaybe<Conversations_Arr_Rel_Insert_Input>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  order_sort?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Interaction_Modes_Max_Fields = {
  __typename?: 'interaction_modes_max_fields';
  /** 内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Interaction_Modes_Min_Fields = {
  __typename?: 'interaction_modes_min_fields';
  /** 内容 */
  content?: Maybe<Scalars['String']['output']>;
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "interaction_modes" */
export type Interaction_Modes_Mutation_Response = {
  __typename?: 'interaction_modes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Interaction_Modes>;
};

/** on_conflict condition type for table "interaction_modes" */
export type Interaction_Modes_On_Conflict = {
  constraint: Interaction_Modes_Constraint;
  update_columns?: Array<Interaction_Modes_Update_Column>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};

/** Ordering options when selecting data from "interaction_modes". */
export type Interaction_Modes_Order_By = {
  content?: InputMaybe<Order_By>;
  cost_crystal?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  intr___conv_aggregate?: InputMaybe<Conversations_Aggregate_Order_By>;
  is_hide?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  order_sort?: InputMaybe<Order_By>;
};

/** primary key columns input for table: interaction_modes */
export type Interaction_Modes_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "interaction_modes" */
export enum Interaction_Modes_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CostCrystal = 'cost_crystal',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  Name = 'name',
  /** column name */
  OrderSort = 'order_sort'
}

/** input type for updating data in table "interaction_modes" */
export type Interaction_Modes_Set_Input = {
  /** 内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 消耗水晶数 */
  cost_crystal?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  order_sort?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Interaction_Modes_Stddev_Fields = {
  __typename?: 'interaction_modes_stddev_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Interaction_Modes_Stddev_Pop_Fields = {
  __typename?: 'interaction_modes_stddev_pop_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Interaction_Modes_Stddev_Samp_Fields = {
  __typename?: 'interaction_modes_stddev_samp_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "interaction_modes" */
export type Interaction_Modes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Interaction_Modes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Interaction_Modes_Stream_Cursor_Value_Input = {
  /** 内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 消耗水晶数 */
  cost_crystal?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  order_sort?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Interaction_Modes_Sum_Fields = {
  __typename?: 'interaction_modes_sum_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "interaction_modes" */
export enum Interaction_Modes_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CostCrystal = 'cost_crystal',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  Name = 'name',
  /** column name */
  OrderSort = 'order_sort'
}

export type Interaction_Modes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Interaction_Modes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Interaction_Modes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Interaction_Modes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Interaction_Modes_Var_Pop_Fields = {
  __typename?: 'interaction_modes_var_pop_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Interaction_Modes_Var_Samp_Fields = {
  __typename?: 'interaction_modes_var_samp_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Interaction_Modes_Variance_Fields = {
  __typename?: 'interaction_modes_variance_fields';
  /** 消耗水晶数 */
  cost_crystal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  order_sort?: Maybe<Scalars['Float']['output']>;
};

/** 会员订单表 */
export type Member_Orders = {
  __typename?: 'member_orders';
  created_at: Scalars['timestamptz']['output'];
  /** 订单描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 钻石增加天数 */
  diamond_days_added: Scalars['numeric']['output'];
  /** 黄金增加天数 */
  gold_days_added: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 订单金额 */
  order_amount: Scalars['numeric']['output'];
  /** 订单状态 */
  order_status?: Maybe<Scalars['String']['output']>;
  /** 订单类型 */
  order_type?: Maybe<Scalars['String']['output']>;
  /** 支付日期 */
  payment_date: Scalars['timestamptz']['output'];
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['bigint']['output']>;
  /** 购买金积分 */
  purchased_gold_points: Scalars['numeric']['output'];
  /** 购买银积分 */
  purchased_silver_points: Scalars['numeric']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "member_orders" */
export type Member_Orders_Aggregate = {
  __typename?: 'member_orders_aggregate';
  aggregate?: Maybe<Member_Orders_Aggregate_Fields>;
  nodes: Array<Member_Orders>;
};

export type Member_Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<Member_Orders_Aggregate_Bool_Exp_Count>;
};

export type Member_Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_orders" */
export type Member_Orders_Aggregate_Fields = {
  __typename?: 'member_orders_aggregate_fields';
  avg?: Maybe<Member_Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Orders_Max_Fields>;
  min?: Maybe<Member_Orders_Min_Fields>;
  stddev?: Maybe<Member_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Orders_Sum_Fields>;
  var_pop?: Maybe<Member_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Orders_Var_Samp_Fields>;
  variance?: Maybe<Member_Orders_Variance_Fields>;
};


/** aggregate fields of "member_orders" */
export type Member_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "member_orders" */
export type Member_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Orders_Max_Order_By>;
  min?: InputMaybe<Member_Orders_Min_Order_By>;
  stddev?: InputMaybe<Member_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "member_orders" */
export type Member_Orders_Arr_Rel_Insert_Input = {
  data: Array<Member_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Orders_Avg_Fields = {
  __typename?: 'member_orders_avg_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "member_orders" */
export type Member_Orders_Avg_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "member_orders". All fields are combined with a logical 'AND'. */
export type Member_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Orders_Bool_Exp>>;
  _not?: InputMaybe<Member_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  diamond_days_added?: InputMaybe<Numeric_Comparison_Exp>;
  gold_days_added?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  order_amount?: InputMaybe<Numeric_Comparison_Exp>;
  order_status?: InputMaybe<String_Comparison_Exp>;
  order_type?: InputMaybe<String_Comparison_Exp>;
  payment_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  payment_id?: InputMaybe<Bigint_Comparison_Exp>;
  purchased_gold_points?: InputMaybe<Numeric_Comparison_Exp>;
  purchased_silver_points?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_orders" */
export enum Member_Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemberOrdersPkey = 'member_orders_pkey'
}

/** input type for incrementing numeric columns in table "member_orders" */
export type Member_Orders_Inc_Input = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Scalars['numeric']['input']>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 订单金额 */
  order_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_orders" */
export type Member_Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 订单描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Scalars['numeric']['input']>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 订单金额 */
  order_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 订单状态 */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** 订单类型 */
  order_type?: InputMaybe<Scalars['String']['input']>;
  /** 支付日期 */
  payment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Member_Orders_Max_Fields = {
  __typename?: 'member_orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 订单描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['numeric']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['numeric']['output']>;
  /** 订单状态 */
  order_status?: Maybe<Scalars['String']['output']>;
  /** 订单类型 */
  order_type?: Maybe<Scalars['String']['output']>;
  /** 支付日期 */
  payment_date?: Maybe<Scalars['timestamptz']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['bigint']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "member_orders" */
export type Member_Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 订单描述 */
  description?: InputMaybe<Order_By>;
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 订单状态 */
  order_status?: InputMaybe<Order_By>;
  /** 订单类型 */
  order_type?: InputMaybe<Order_By>;
  /** 支付日期 */
  payment_date?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Orders_Min_Fields = {
  __typename?: 'member_orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 订单描述 */
  description?: Maybe<Scalars['String']['output']>;
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['numeric']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['numeric']['output']>;
  /** 订单状态 */
  order_status?: Maybe<Scalars['String']['output']>;
  /** 订单类型 */
  order_type?: Maybe<Scalars['String']['output']>;
  /** 支付日期 */
  payment_date?: Maybe<Scalars['timestamptz']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['bigint']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "member_orders" */
export type Member_Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  /** 订单描述 */
  description?: InputMaybe<Order_By>;
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 订单状态 */
  order_status?: InputMaybe<Order_By>;
  /** 订单类型 */
  order_type?: InputMaybe<Order_By>;
  /** 支付日期 */
  payment_date?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_orders" */
export type Member_Orders_Mutation_Response = {
  __typename?: 'member_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Orders>;
};

/** on_conflict condition type for table "member_orders" */
export type Member_Orders_On_Conflict = {
  constraint: Member_Orders_Constraint;
  update_columns?: Array<Member_Orders_Update_Column>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "member_orders". */
export type Member_Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  diamond_days_added?: InputMaybe<Order_By>;
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_amount?: InputMaybe<Order_By>;
  order_status?: InputMaybe<Order_By>;
  order_type?: InputMaybe<Order_By>;
  payment_date?: InputMaybe<Order_By>;
  payment_id?: InputMaybe<Order_By>;
  purchased_gold_points?: InputMaybe<Order_By>;
  purchased_silver_points?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_orders */
export type Member_Orders_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "member_orders" */
export enum Member_Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DiamondDaysAdded = 'diamond_days_added',
  /** column name */
  GoldDaysAdded = 'gold_days_added',
  /** column name */
  Id = 'id',
  /** column name */
  OrderAmount = 'order_amount',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  OrderType = 'order_type',
  /** column name */
  PaymentDate = 'payment_date',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PurchasedGoldPoints = 'purchased_gold_points',
  /** column name */
  PurchasedSilverPoints = 'purchased_silver_points',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "member_orders" */
export type Member_Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 订单描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Scalars['numeric']['input']>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 订单金额 */
  order_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 订单状态 */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** 订单类型 */
  order_type?: InputMaybe<Scalars['String']['input']>;
  /** 支付日期 */
  payment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Member_Orders_Stddev_Fields = {
  __typename?: 'member_orders_stddev_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "member_orders" */
export type Member_Orders_Stddev_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Orders_Stddev_Pop_Fields = {
  __typename?: 'member_orders_stddev_pop_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "member_orders" */
export type Member_Orders_Stddev_Pop_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Orders_Stddev_Samp_Fields = {
  __typename?: 'member_orders_stddev_samp_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "member_orders" */
export type Member_Orders_Stddev_Samp_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "member_orders" */
export type Member_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 订单描述 */
  description?: InputMaybe<Scalars['String']['input']>;
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Scalars['numeric']['input']>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 订单金额 */
  order_amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 订单状态 */
  order_status?: InputMaybe<Scalars['String']['input']>;
  /** 订单类型 */
  order_type?: InputMaybe<Scalars['String']['input']>;
  /** 支付日期 */
  payment_date?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 所属用户 */
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Member_Orders_Sum_Fields = {
  __typename?: 'member_orders_sum_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['numeric']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['numeric']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['bigint']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['numeric']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['numeric']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "member_orders" */
export type Member_Orders_Sum_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "member_orders" */
export enum Member_Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  DiamondDaysAdded = 'diamond_days_added',
  /** column name */
  GoldDaysAdded = 'gold_days_added',
  /** column name */
  Id = 'id',
  /** column name */
  OrderAmount = 'order_amount',
  /** column name */
  OrderStatus = 'order_status',
  /** column name */
  OrderType = 'order_type',
  /** column name */
  PaymentDate = 'payment_date',
  /** column name */
  PaymentId = 'payment_id',
  /** column name */
  PurchasedGoldPoints = 'purchased_gold_points',
  /** column name */
  PurchasedSilverPoints = 'purchased_silver_points',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Member_Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Orders_Var_Pop_Fields = {
  __typename?: 'member_orders_var_pop_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "member_orders" */
export type Member_Orders_Var_Pop_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Orders_Var_Samp_Fields = {
  __typename?: 'member_orders_var_samp_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "member_orders" */
export type Member_Orders_Var_Samp_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Orders_Variance_Fields = {
  __typename?: 'member_orders_variance_fields';
  /** 钻石增加天数 */
  diamond_days_added?: Maybe<Scalars['Float']['output']>;
  /** 黄金增加天数 */
  gold_days_added?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 订单金额 */
  order_amount?: Maybe<Scalars['Float']['output']>;
  /** 支付记录ID */
  payment_id?: Maybe<Scalars['Float']['output']>;
  /** 购买金积分 */
  purchased_gold_points?: Maybe<Scalars['Float']['output']>;
  /** 购买银积分 */
  purchased_silver_points?: Maybe<Scalars['Float']['output']>;
  /** 所属用户 */
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "member_orders" */
export type Member_Orders_Variance_Order_By = {
  /** 钻石增加天数 */
  diamond_days_added?: InputMaybe<Order_By>;
  /** 黄金增加天数 */
  gold_days_added?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 订单金额 */
  order_amount?: InputMaybe<Order_By>;
  /** 支付记录ID */
  payment_id?: InputMaybe<Order_By>;
  /** 购买金积分 */
  purchased_gold_points?: InputMaybe<Order_By>;
  /** 购买银积分 */
  purchased_silver_points?: InputMaybe<Order_By>;
  /** 所属用户 */
  user_id?: InputMaybe<Order_By>;
};

/** 会员套餐 */
export type Member_Plans = {
  __typename?: 'member_plans';
  /** 金额 */
  amount: Scalars['numeric']['output'];
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 畅聊天数 */
  free_chat_count: Scalars['numeric']['output'];
  /** 金积分 */
  gold_points: Scalars['numeric']['output'];
  id: Scalars['bigint']['output'];
  /** 是否隐藏 */
  is_hide: Scalars['Boolean']['output'];
  /** 角色id */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 套餐名称 */
  name: Scalars['String']['output'];
  /** 原价 */
  original_price: Scalars['numeric']['output'];
  /** 类型 */
  package_type?: Maybe<Scalars['String']['output']>;
  /** 银积分 */
  silver_points: Scalars['numeric']['output'];
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 无限对话 */
  unlimited_chat: Scalars['Boolean']['output'];
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "member_plans" */
export type Member_Plans_Aggregate = {
  __typename?: 'member_plans_aggregate';
  aggregate?: Maybe<Member_Plans_Aggregate_Fields>;
  nodes: Array<Member_Plans>;
};

export type Member_Plans_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Member_Plans_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Member_Plans_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Member_Plans_Aggregate_Bool_Exp_Count>;
};

export type Member_Plans_Aggregate_Bool_Exp_Bool_And = {
  arguments: Member_Plans_Select_Column_Member_Plans_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Plans_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Plans_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Member_Plans_Select_Column_Member_Plans_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Plans_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Member_Plans_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Member_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Member_Plans_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "member_plans" */
export type Member_Plans_Aggregate_Fields = {
  __typename?: 'member_plans_aggregate_fields';
  avg?: Maybe<Member_Plans_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Plans_Max_Fields>;
  min?: Maybe<Member_Plans_Min_Fields>;
  stddev?: Maybe<Member_Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Plans_Sum_Fields>;
  var_pop?: Maybe<Member_Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Plans_Var_Samp_Fields>;
  variance?: Maybe<Member_Plans_Variance_Fields>;
};


/** aggregate fields of "member_plans" */
export type Member_Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "member_plans" */
export type Member_Plans_Aggregate_Order_By = {
  avg?: InputMaybe<Member_Plans_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Member_Plans_Max_Order_By>;
  min?: InputMaybe<Member_Plans_Min_Order_By>;
  stddev?: InputMaybe<Member_Plans_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Member_Plans_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Member_Plans_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Member_Plans_Sum_Order_By>;
  var_pop?: InputMaybe<Member_Plans_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Member_Plans_Var_Samp_Order_By>;
  variance?: InputMaybe<Member_Plans_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "member_plans" */
export type Member_Plans_Arr_Rel_Insert_Input = {
  data: Array<Member_Plans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Member_Plans_On_Conflict>;
};

/** aggregate avg on columns */
export type Member_Plans_Avg_Fields = {
  __typename?: 'member_plans_avg_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "member_plans" */
export type Member_Plans_Avg_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "member_plans". All fields are combined with a logical 'AND'. */
export type Member_Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Plans_Bool_Exp>>;
  _not?: InputMaybe<Member_Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Plans_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  free_chat_count?: InputMaybe<Numeric_Comparison_Exp>;
  gold_points?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  is_hide?: InputMaybe<Boolean_Comparison_Exp>;
  member_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  original_price?: InputMaybe<Numeric_Comparison_Exp>;
  package_type?: InputMaybe<String_Comparison_Exp>;
  silver_points?: InputMaybe<Numeric_Comparison_Exp>;
  sort_order?: InputMaybe<Numeric_Comparison_Exp>;
  unlimited_chat?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "member_plans" */
export enum Member_Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  RechargePackagesPkey = 'recharge_packages_pkey'
}

/** input type for incrementing numeric columns in table "member_plans" */
export type Member_Plans_Inc_Input = {
  /** 金额 */
  amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Scalars['numeric']['input']>;
  /** 金积分 */
  gold_points?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色id */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 原价 */
  original_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 银积分 */
  silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "member_plans" */
export type Member_Plans_Insert_Input = {
  /** 金额 */
  amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Scalars['numeric']['input']>;
  /** 金积分 */
  gold_points?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色id */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套餐名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 原价 */
  original_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 类型 */
  package_type?: InputMaybe<Scalars['String']['input']>;
  /** 银积分 */
  silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 无限对话 */
  unlimited_chat?: InputMaybe<Scalars['Boolean']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Member_Plans_Max_Fields = {
  __typename?: 'member_plans_max_fields';
  /** 金额 */
  amount?: Maybe<Scalars['numeric']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['numeric']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 套餐名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['numeric']['output']>;
  /** 类型 */
  package_type?: Maybe<Scalars['String']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['numeric']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "member_plans" */
export type Member_Plans_Max_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 套餐名称 */
  name?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 类型 */
  package_type?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Member_Plans_Min_Fields = {
  __typename?: 'member_plans_min_fields';
  /** 金额 */
  amount?: Maybe<Scalars['numeric']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['numeric']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 套餐名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['numeric']['output']>;
  /** 类型 */
  package_type?: Maybe<Scalars['String']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['numeric']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "member_plans" */
export type Member_Plans_Min_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 套餐名称 */
  name?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 类型 */
  package_type?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
  /** 更新时间 */
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "member_plans" */
export type Member_Plans_Mutation_Response = {
  __typename?: 'member_plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Plans>;
};

/** on_conflict condition type for table "member_plans" */
export type Member_Plans_On_Conflict = {
  constraint: Member_Plans_Constraint;
  update_columns?: Array<Member_Plans_Update_Column>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "member_plans". */
export type Member_Plans_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  free_chat_count?: InputMaybe<Order_By>;
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_hide?: InputMaybe<Order_By>;
  member_type_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  original_price?: InputMaybe<Order_By>;
  package_type?: InputMaybe<Order_By>;
  silver_points?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  unlimited_chat?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: member_plans */
export type Member_Plans_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "member_plans" */
export enum Member_Plans_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FreeChatCount = 'free_chat_count',
  /** column name */
  GoldPoints = 'gold_points',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  MemberTypeId = 'member_type_id',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalPrice = 'original_price',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  SilverPoints = 'silver_points',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UnlimitedChat = 'unlimited_chat',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "member_plans_aggregate_bool_exp_bool_and_arguments_columns" columns of table "member_plans" */
export enum Member_Plans_Select_Column_Member_Plans_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  UnlimitedChat = 'unlimited_chat'
}

/** select "member_plans_aggregate_bool_exp_bool_or_arguments_columns" columns of table "member_plans" */
export enum Member_Plans_Select_Column_Member_Plans_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  UnlimitedChat = 'unlimited_chat'
}

/** input type for updating data in table "member_plans" */
export type Member_Plans_Set_Input = {
  /** 金额 */
  amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Scalars['numeric']['input']>;
  /** 金积分 */
  gold_points?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色id */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套餐名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 原价 */
  original_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 类型 */
  package_type?: InputMaybe<Scalars['String']['input']>;
  /** 银积分 */
  silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 无限对话 */
  unlimited_chat?: InputMaybe<Scalars['Boolean']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Member_Plans_Stddev_Fields = {
  __typename?: 'member_plans_stddev_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "member_plans" */
export type Member_Plans_Stddev_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Member_Plans_Stddev_Pop_Fields = {
  __typename?: 'member_plans_stddev_pop_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "member_plans" */
export type Member_Plans_Stddev_Pop_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Member_Plans_Stddev_Samp_Fields = {
  __typename?: 'member_plans_stddev_samp_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "member_plans" */
export type Member_Plans_Stddev_Samp_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "member_plans" */
export type Member_Plans_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Plans_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Plans_Stream_Cursor_Value_Input = {
  /** 金额 */
  amount?: InputMaybe<Scalars['numeric']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Scalars['numeric']['input']>;
  /** 金积分 */
  gold_points?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 是否隐藏 */
  is_hide?: InputMaybe<Scalars['Boolean']['input']>;
  /** 角色id */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套餐名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 原价 */
  original_price?: InputMaybe<Scalars['numeric']['input']>;
  /** 类型 */
  package_type?: InputMaybe<Scalars['String']['input']>;
  /** 银积分 */
  silver_points?: InputMaybe<Scalars['numeric']['input']>;
  /** 排序 */
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  /** 无限对话 */
  unlimited_chat?: InputMaybe<Scalars['Boolean']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Member_Plans_Sum_Fields = {
  __typename?: 'member_plans_sum_fields';
  /** 金额 */
  amount?: Maybe<Scalars['numeric']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['numeric']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['numeric']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['numeric']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "member_plans" */
export type Member_Plans_Sum_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** update columns of table "member_plans" */
export enum Member_Plans_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FreeChatCount = 'free_chat_count',
  /** column name */
  GoldPoints = 'gold_points',
  /** column name */
  Id = 'id',
  /** column name */
  IsHide = 'is_hide',
  /** column name */
  MemberTypeId = 'member_type_id',
  /** column name */
  Name = 'name',
  /** column name */
  OriginalPrice = 'original_price',
  /** column name */
  PackageType = 'package_type',
  /** column name */
  SilverPoints = 'silver_points',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UnlimitedChat = 'unlimited_chat',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Member_Plans_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Plans_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Plans_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Plans_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Plans_Var_Pop_Fields = {
  __typename?: 'member_plans_var_pop_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "member_plans" */
export type Member_Plans_Var_Pop_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Member_Plans_Var_Samp_Fields = {
  __typename?: 'member_plans_var_samp_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "member_plans" */
export type Member_Plans_Var_Samp_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Member_Plans_Variance_Fields = {
  __typename?: 'member_plans_variance_fields';
  /** 金额 */
  amount?: Maybe<Scalars['Float']['output']>;
  /** 畅聊天数 */
  free_chat_count?: Maybe<Scalars['Float']['output']>;
  /** 金积分 */
  gold_points?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 角色id */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 原价 */
  original_price?: Maybe<Scalars['Float']['output']>;
  /** 银积分 */
  silver_points?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "member_plans" */
export type Member_Plans_Variance_Order_By = {
  /** 金额 */
  amount?: InputMaybe<Order_By>;
  /** 畅聊天数 */
  free_chat_count?: InputMaybe<Order_By>;
  /** 金积分 */
  gold_points?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 角色id */
  member_type_id?: InputMaybe<Order_By>;
  /** 原价 */
  original_price?: InputMaybe<Order_By>;
  /** 银积分 */
  silver_points?: InputMaybe<Order_By>;
  /** 排序 */
  sort_order?: InputMaybe<Order_By>;
};

/** 用户会员类型表 */
export type Member_Types = {
  __typename?: 'member_types';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 角色名称 */
  name: Scalars['String']['output'];
  /** An array relationship */
  recharge_packages: Array<Member_Plans>;
  /** An aggregate relationship */
  recharge_packages_aggregate: Member_Plans_Aggregate;
  updated_at: Scalars['timestamptz']['output'];
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
};


/** 用户会员类型表 */
export type Member_TypesRecharge_PackagesArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


/** 用户会员类型表 */
export type Member_TypesRecharge_Packages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


/** 用户会员类型表 */
export type Member_TypesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** 用户会员类型表 */
export type Member_TypesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "member_types" */
export type Member_Types_Aggregate = {
  __typename?: 'member_types_aggregate';
  aggregate?: Maybe<Member_Types_Aggregate_Fields>;
  nodes: Array<Member_Types>;
};

/** aggregate fields of "member_types" */
export type Member_Types_Aggregate_Fields = {
  __typename?: 'member_types_aggregate_fields';
  avg?: Maybe<Member_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Member_Types_Max_Fields>;
  min?: Maybe<Member_Types_Min_Fields>;
  stddev?: Maybe<Member_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Member_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Member_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Member_Types_Sum_Fields>;
  var_pop?: Maybe<Member_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Member_Types_Var_Samp_Fields>;
  variance?: Maybe<Member_Types_Variance_Fields>;
};


/** aggregate fields of "member_types" */
export type Member_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Member_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Member_Types_Avg_Fields = {
  __typename?: 'member_types_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "member_types". All fields are combined with a logical 'AND'. */
export type Member_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Member_Types_Bool_Exp>>;
  _not?: InputMaybe<Member_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Member_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recharge_packages?: InputMaybe<Member_Plans_Bool_Exp>;
  recharge_packages_aggregate?: InputMaybe<Member_Plans_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "member_types" */
export enum Member_Types_Constraint {
  /** unique or primary key constraint on columns "name" */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing numeric columns in table "member_types" */
export type Member_Types_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "member_types" */
export type Member_Types_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  recharge_packages?: InputMaybe<Member_Plans_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Member_Types_Max_Fields = {
  __typename?: 'member_types_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Member_Types_Min_Fields = {
  __typename?: 'member_types_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 角色名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "member_types" */
export type Member_Types_Mutation_Response = {
  __typename?: 'member_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Member_Types>;
};

/** on_conflict condition type for table "member_types" */
export type Member_Types_On_Conflict = {
  constraint: Member_Types_Constraint;
  update_columns?: Array<Member_Types_Update_Column>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "member_types". */
export type Member_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  recharge_packages_aggregate?: InputMaybe<Member_Plans_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: member_types */
export type Member_Types_Pk_Columns_Input = {
  /** 角色名称 */
  name: Scalars['String']['input'];
};

/** select columns of table "member_types" */
export enum Member_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "member_types" */
export type Member_Types_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Member_Types_Stddev_Fields = {
  __typename?: 'member_types_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Member_Types_Stddev_Pop_Fields = {
  __typename?: 'member_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Member_Types_Stddev_Samp_Fields = {
  __typename?: 'member_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "member_types" */
export type Member_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Member_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Member_Types_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 角色名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Member_Types_Sum_Fields = {
  __typename?: 'member_types_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "member_types" */
export enum Member_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Member_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Member_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Member_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Member_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Member_Types_Var_Pop_Fields = {
  __typename?: 'member_types_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Member_Types_Var_Samp_Fields = {
  __typename?: 'member_types_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Member_Types_Variance_Fields = {
  __typename?: 'member_types_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "ad_watch_records" */
  delete_ad_watch_records?: Maybe<Ad_Watch_Records_Mutation_Response>;
  /** delete single row from the table: "ad_watch_records" */
  delete_ad_watch_records_by_pk?: Maybe<Ad_Watch_Records>;
  /** delete data from the table: "ai_friends" */
  delete_ai_friends?: Maybe<Ai_Friends_Mutation_Response>;
  /** delete single row from the table: "ai_friends" */
  delete_ai_friends_by_pk?: Maybe<Ai_Friends>;
  /** delete data from the table: "character_personalitys" */
  delete_character_personalitys?: Maybe<Character_Personalitys_Mutation_Response>;
  /** delete single row from the table: "character_personalitys" */
  delete_character_personalitys_by_pk?: Maybe<Character_Personalitys>;
  /** delete data from the table: "character_types" */
  delete_character_types?: Maybe<Character_Types_Mutation_Response>;
  /** delete single row from the table: "character_types" */
  delete_character_types_by_pk?: Maybe<Character_Types>;
  /** delete data from the table: "characters" */
  delete_characters?: Maybe<Characters_Mutation_Response>;
  /** delete single row from the table: "characters" */
  delete_characters_by_pk?: Maybe<Characters>;
  /** delete data from the table: "characters_ss" */
  delete_characters_ss?: Maybe<Characters_Ss_Mutation_Response>;
  /** delete single row from the table: "characters_ss" */
  delete_characters_ss_by_pk?: Maybe<Characters_Ss>;
  /** delete data from the table: "chat_messages" */
  delete_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** delete single row from the table: "chat_messages" */
  delete_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** delete data from the table: "conversations" */
  delete_conversations?: Maybe<Conversations_Mutation_Response>;
  /** delete single row from the table: "conversations" */
  delete_conversations_by_pk?: Maybe<Conversations>;
  /** delete data from the table: "credit_got" */
  delete_credit_got?: Maybe<Credit_Got_Mutation_Response>;
  /** delete single row from the table: "credit_got" */
  delete_credit_got_by_pk?: Maybe<Credit_Got>;
  /** delete data from the table: "credit_used" */
  delete_credit_used?: Maybe<Credit_Used_Mutation_Response>;
  /** delete single row from the table: "credit_used" */
  delete_credit_used_by_pk?: Maybe<Credit_Used>;
  /** delete data from the table: "exploreAI" */
  delete_exploreAI?: Maybe<ExploreAi_Mutation_Response>;
  /** delete single row from the table: "exploreAI" */
  delete_exploreAI_by_pk?: Maybe<ExploreAi>;
  /** delete data from the table: "gen_tasks" */
  delete_gen_tasks?: Maybe<Gen_Tasks_Mutation_Response>;
  /** delete single row from the table: "gen_tasks" */
  delete_gen_tasks_by_pk?: Maybe<Gen_Tasks>;
  /** delete data from the table: "global_params" */
  delete_global_params?: Maybe<Global_Params_Mutation_Response>;
  /** delete single row from the table: "global_params" */
  delete_global_params_by_pk?: Maybe<Global_Params>;
  /** delete data from the table: "image_models" */
  delete_image_models?: Maybe<Image_Models_Mutation_Response>;
  /** delete single row from the table: "image_models" */
  delete_image_models_by_pk?: Maybe<Image_Models>;
  /** delete data from the table: "interaction_modes" */
  delete_interaction_modes?: Maybe<Interaction_Modes_Mutation_Response>;
  /** delete single row from the table: "interaction_modes" */
  delete_interaction_modes_by_pk?: Maybe<Interaction_Modes>;
  /** delete data from the table: "member_orders" */
  delete_member_orders?: Maybe<Member_Orders_Mutation_Response>;
  /** delete single row from the table: "member_orders" */
  delete_member_orders_by_pk?: Maybe<Member_Orders>;
  /** delete data from the table: "member_plans" */
  delete_member_plans?: Maybe<Member_Plans_Mutation_Response>;
  /** delete single row from the table: "member_plans" */
  delete_member_plans_by_pk?: Maybe<Member_Plans>;
  /** delete data from the table: "member_types" */
  delete_member_types?: Maybe<Member_Types_Mutation_Response>;
  /** delete single row from the table: "member_types" */
  delete_member_types_by_pk?: Maybe<Member_Types>;
  /** delete data from the table: "page_images" */
  delete_page_images?: Maybe<Page_Images_Mutation_Response>;
  /** delete single row from the table: "page_images" */
  delete_page_images_by_pk?: Maybe<Page_Images>;
  /** delete data from the table: "persons" */
  delete_persons?: Maybe<Persons_Mutation_Response>;
  /** delete single row from the table: "persons" */
  delete_persons_by_pk?: Maybe<Persons>;
  /** delete data from the table: "poses" */
  delete_poses?: Maybe<Poses_Mutation_Response>;
  /** delete single row from the table: "poses" */
  delete_poses_by_pk?: Maybe<Poses>;
  /** delete data from the table: "prompt_tag_types" */
  delete_prompt_tag_types?: Maybe<Prompt_Tag_Types_Mutation_Response>;
  /** delete single row from the table: "prompt_tag_types" */
  delete_prompt_tag_types_by_pk?: Maybe<Prompt_Tag_Types>;
  /** delete data from the table: "prompt_tags" */
  delete_prompt_tags?: Maybe<Prompt_Tags_Mutation_Response>;
  /** delete single row from the table: "prompt_tags" */
  delete_prompt_tags_by_pk?: Maybe<Prompt_Tags>;
  /** delete data from the table: "scenes" */
  delete_scenes?: Maybe<Scenes_Mutation_Response>;
  /** delete single row from the table: "scenes" */
  delete_scenes_by_pk?: Maybe<Scenes>;
  /** delete data from the table: "suits" */
  delete_suits?: Maybe<Suits_Mutation_Response>;
  /** delete single row from the table: "suits" */
  delete_suits_by_pk?: Maybe<Suits>;
  /** delete data from the table: "test.memo" */
  delete_test_memo?: Maybe<Test_Memo_Mutation_Response>;
  /** delete single row from the table: "test.memo" */
  delete_test_memo_by_pk?: Maybe<Test_Memo>;
  /** delete data from the table: "test.user" */
  delete_test_user?: Maybe<Test_User_Mutation_Response>;
  /** delete single row from the table: "test.user" */
  delete_test_user_by_pk?: Maybe<Test_User>;
  /** delete data from the table: "user_openid_mapping" */
  delete_user_openid_mapping?: Maybe<User_Openid_Mapping_Mutation_Response>;
  /** delete single row from the table: "user_openid_mapping" */
  delete_user_openid_mapping_by_pk?: Maybe<User_Openid_Mapping>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "ad_watch_records" */
  insert_ad_watch_records?: Maybe<Ad_Watch_Records_Mutation_Response>;
  /** insert a single row into the table: "ad_watch_records" */
  insert_ad_watch_records_one?: Maybe<Ad_Watch_Records>;
  /** insert data into the table: "ai_friends" */
  insert_ai_friends?: Maybe<Ai_Friends_Mutation_Response>;
  /** insert a single row into the table: "ai_friends" */
  insert_ai_friends_one?: Maybe<Ai_Friends>;
  /** insert data into the table: "character_personalitys" */
  insert_character_personalitys?: Maybe<Character_Personalitys_Mutation_Response>;
  /** insert a single row into the table: "character_personalitys" */
  insert_character_personalitys_one?: Maybe<Character_Personalitys>;
  /** insert data into the table: "character_types" */
  insert_character_types?: Maybe<Character_Types_Mutation_Response>;
  /** insert a single row into the table: "character_types" */
  insert_character_types_one?: Maybe<Character_Types>;
  /** insert data into the table: "characters" */
  insert_characters?: Maybe<Characters_Mutation_Response>;
  /** insert a single row into the table: "characters" */
  insert_characters_one?: Maybe<Characters>;
  /** insert data into the table: "characters_ss" */
  insert_characters_ss?: Maybe<Characters_Ss_Mutation_Response>;
  /** insert a single row into the table: "characters_ss" */
  insert_characters_ss_one?: Maybe<Characters_Ss>;
  /** insert data into the table: "chat_messages" */
  insert_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** insert a single row into the table: "chat_messages" */
  insert_chat_messages_one?: Maybe<Chat_Messages>;
  /** insert data into the table: "conversations" */
  insert_conversations?: Maybe<Conversations_Mutation_Response>;
  /** insert a single row into the table: "conversations" */
  insert_conversations_one?: Maybe<Conversations>;
  /** insert data into the table: "credit_got" */
  insert_credit_got?: Maybe<Credit_Got_Mutation_Response>;
  /** insert a single row into the table: "credit_got" */
  insert_credit_got_one?: Maybe<Credit_Got>;
  /** insert data into the table: "credit_used" */
  insert_credit_used?: Maybe<Credit_Used_Mutation_Response>;
  /** insert a single row into the table: "credit_used" */
  insert_credit_used_one?: Maybe<Credit_Used>;
  /** insert data into the table: "exploreAI" */
  insert_exploreAI?: Maybe<ExploreAi_Mutation_Response>;
  /** insert a single row into the table: "exploreAI" */
  insert_exploreAI_one?: Maybe<ExploreAi>;
  /** insert data into the table: "gen_tasks" */
  insert_gen_tasks?: Maybe<Gen_Tasks_Mutation_Response>;
  /** insert a single row into the table: "gen_tasks" */
  insert_gen_tasks_one?: Maybe<Gen_Tasks>;
  /** insert data into the table: "global_params" */
  insert_global_params?: Maybe<Global_Params_Mutation_Response>;
  /** insert a single row into the table: "global_params" */
  insert_global_params_one?: Maybe<Global_Params>;
  /** insert data into the table: "image_models" */
  insert_image_models?: Maybe<Image_Models_Mutation_Response>;
  /** insert a single row into the table: "image_models" */
  insert_image_models_one?: Maybe<Image_Models>;
  /** insert data into the table: "interaction_modes" */
  insert_interaction_modes?: Maybe<Interaction_Modes_Mutation_Response>;
  /** insert a single row into the table: "interaction_modes" */
  insert_interaction_modes_one?: Maybe<Interaction_Modes>;
  /** insert data into the table: "member_orders" */
  insert_member_orders?: Maybe<Member_Orders_Mutation_Response>;
  /** insert a single row into the table: "member_orders" */
  insert_member_orders_one?: Maybe<Member_Orders>;
  /** insert data into the table: "member_plans" */
  insert_member_plans?: Maybe<Member_Plans_Mutation_Response>;
  /** insert a single row into the table: "member_plans" */
  insert_member_plans_one?: Maybe<Member_Plans>;
  /** insert data into the table: "member_types" */
  insert_member_types?: Maybe<Member_Types_Mutation_Response>;
  /** insert a single row into the table: "member_types" */
  insert_member_types_one?: Maybe<Member_Types>;
  /** insert data into the table: "page_images" */
  insert_page_images?: Maybe<Page_Images_Mutation_Response>;
  /** insert a single row into the table: "page_images" */
  insert_page_images_one?: Maybe<Page_Images>;
  /** insert data into the table: "persons" */
  insert_persons?: Maybe<Persons_Mutation_Response>;
  /** insert a single row into the table: "persons" */
  insert_persons_one?: Maybe<Persons>;
  /** insert data into the table: "poses" */
  insert_poses?: Maybe<Poses_Mutation_Response>;
  /** insert a single row into the table: "poses" */
  insert_poses_one?: Maybe<Poses>;
  /** insert data into the table: "prompt_tag_types" */
  insert_prompt_tag_types?: Maybe<Prompt_Tag_Types_Mutation_Response>;
  /** insert a single row into the table: "prompt_tag_types" */
  insert_prompt_tag_types_one?: Maybe<Prompt_Tag_Types>;
  /** insert data into the table: "prompt_tags" */
  insert_prompt_tags?: Maybe<Prompt_Tags_Mutation_Response>;
  /** insert a single row into the table: "prompt_tags" */
  insert_prompt_tags_one?: Maybe<Prompt_Tags>;
  /** insert data into the table: "scenes" */
  insert_scenes?: Maybe<Scenes_Mutation_Response>;
  /** insert a single row into the table: "scenes" */
  insert_scenes_one?: Maybe<Scenes>;
  /** insert data into the table: "suits" */
  insert_suits?: Maybe<Suits_Mutation_Response>;
  /** insert a single row into the table: "suits" */
  insert_suits_one?: Maybe<Suits>;
  /** insert data into the table: "test.memo" */
  insert_test_memo?: Maybe<Test_Memo_Mutation_Response>;
  /** insert a single row into the table: "test.memo" */
  insert_test_memo_one?: Maybe<Test_Memo>;
  /** insert data into the table: "test.user" */
  insert_test_user?: Maybe<Test_User_Mutation_Response>;
  /** insert a single row into the table: "test.user" */
  insert_test_user_one?: Maybe<Test_User>;
  /** insert data into the table: "user_openid_mapping" */
  insert_user_openid_mapping?: Maybe<User_Openid_Mapping_Mutation_Response>;
  /** insert a single row into the table: "user_openid_mapping" */
  insert_user_openid_mapping_one?: Maybe<User_Openid_Mapping>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "ad_watch_records" */
  update_ad_watch_records?: Maybe<Ad_Watch_Records_Mutation_Response>;
  /** update single row of the table: "ad_watch_records" */
  update_ad_watch_records_by_pk?: Maybe<Ad_Watch_Records>;
  /** update multiples rows of table: "ad_watch_records" */
  update_ad_watch_records_many?: Maybe<Array<Maybe<Ad_Watch_Records_Mutation_Response>>>;
  /** update data of the table: "ai_friends" */
  update_ai_friends?: Maybe<Ai_Friends_Mutation_Response>;
  /** update single row of the table: "ai_friends" */
  update_ai_friends_by_pk?: Maybe<Ai_Friends>;
  /** update multiples rows of table: "ai_friends" */
  update_ai_friends_many?: Maybe<Array<Maybe<Ai_Friends_Mutation_Response>>>;
  /** update data of the table: "character_personalitys" */
  update_character_personalitys?: Maybe<Character_Personalitys_Mutation_Response>;
  /** update single row of the table: "character_personalitys" */
  update_character_personalitys_by_pk?: Maybe<Character_Personalitys>;
  /** update multiples rows of table: "character_personalitys" */
  update_character_personalitys_many?: Maybe<Array<Maybe<Character_Personalitys_Mutation_Response>>>;
  /** update data of the table: "character_types" */
  update_character_types?: Maybe<Character_Types_Mutation_Response>;
  /** update single row of the table: "character_types" */
  update_character_types_by_pk?: Maybe<Character_Types>;
  /** update multiples rows of table: "character_types" */
  update_character_types_many?: Maybe<Array<Maybe<Character_Types_Mutation_Response>>>;
  /** update data of the table: "characters" */
  update_characters?: Maybe<Characters_Mutation_Response>;
  /** update single row of the table: "characters" */
  update_characters_by_pk?: Maybe<Characters>;
  /** update multiples rows of table: "characters" */
  update_characters_many?: Maybe<Array<Maybe<Characters_Mutation_Response>>>;
  /** update data of the table: "characters_ss" */
  update_characters_ss?: Maybe<Characters_Ss_Mutation_Response>;
  /** update single row of the table: "characters_ss" */
  update_characters_ss_by_pk?: Maybe<Characters_Ss>;
  /** update multiples rows of table: "characters_ss" */
  update_characters_ss_many?: Maybe<Array<Maybe<Characters_Ss_Mutation_Response>>>;
  /** update data of the table: "chat_messages" */
  update_chat_messages?: Maybe<Chat_Messages_Mutation_Response>;
  /** update single row of the table: "chat_messages" */
  update_chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** update multiples rows of table: "chat_messages" */
  update_chat_messages_many?: Maybe<Array<Maybe<Chat_Messages_Mutation_Response>>>;
  /** update data of the table: "conversations" */
  update_conversations?: Maybe<Conversations_Mutation_Response>;
  /** update single row of the table: "conversations" */
  update_conversations_by_pk?: Maybe<Conversations>;
  /** update multiples rows of table: "conversations" */
  update_conversations_many?: Maybe<Array<Maybe<Conversations_Mutation_Response>>>;
  /** update data of the table: "credit_got" */
  update_credit_got?: Maybe<Credit_Got_Mutation_Response>;
  /** update single row of the table: "credit_got" */
  update_credit_got_by_pk?: Maybe<Credit_Got>;
  /** update multiples rows of table: "credit_got" */
  update_credit_got_many?: Maybe<Array<Maybe<Credit_Got_Mutation_Response>>>;
  /** update data of the table: "credit_used" */
  update_credit_used?: Maybe<Credit_Used_Mutation_Response>;
  /** update single row of the table: "credit_used" */
  update_credit_used_by_pk?: Maybe<Credit_Used>;
  /** update multiples rows of table: "credit_used" */
  update_credit_used_many?: Maybe<Array<Maybe<Credit_Used_Mutation_Response>>>;
  /** update data of the table: "exploreAI" */
  update_exploreAI?: Maybe<ExploreAi_Mutation_Response>;
  /** update single row of the table: "exploreAI" */
  update_exploreAI_by_pk?: Maybe<ExploreAi>;
  /** update multiples rows of table: "exploreAI" */
  update_exploreAI_many?: Maybe<Array<Maybe<ExploreAi_Mutation_Response>>>;
  /** update data of the table: "gen_tasks" */
  update_gen_tasks?: Maybe<Gen_Tasks_Mutation_Response>;
  /** update single row of the table: "gen_tasks" */
  update_gen_tasks_by_pk?: Maybe<Gen_Tasks>;
  /** update multiples rows of table: "gen_tasks" */
  update_gen_tasks_many?: Maybe<Array<Maybe<Gen_Tasks_Mutation_Response>>>;
  /** update data of the table: "global_params" */
  update_global_params?: Maybe<Global_Params_Mutation_Response>;
  /** update single row of the table: "global_params" */
  update_global_params_by_pk?: Maybe<Global_Params>;
  /** update multiples rows of table: "global_params" */
  update_global_params_many?: Maybe<Array<Maybe<Global_Params_Mutation_Response>>>;
  /** update data of the table: "image_models" */
  update_image_models?: Maybe<Image_Models_Mutation_Response>;
  /** update single row of the table: "image_models" */
  update_image_models_by_pk?: Maybe<Image_Models>;
  /** update multiples rows of table: "image_models" */
  update_image_models_many?: Maybe<Array<Maybe<Image_Models_Mutation_Response>>>;
  /** update data of the table: "interaction_modes" */
  update_interaction_modes?: Maybe<Interaction_Modes_Mutation_Response>;
  /** update single row of the table: "interaction_modes" */
  update_interaction_modes_by_pk?: Maybe<Interaction_Modes>;
  /** update multiples rows of table: "interaction_modes" */
  update_interaction_modes_many?: Maybe<Array<Maybe<Interaction_Modes_Mutation_Response>>>;
  /** update data of the table: "member_orders" */
  update_member_orders?: Maybe<Member_Orders_Mutation_Response>;
  /** update single row of the table: "member_orders" */
  update_member_orders_by_pk?: Maybe<Member_Orders>;
  /** update multiples rows of table: "member_orders" */
  update_member_orders_many?: Maybe<Array<Maybe<Member_Orders_Mutation_Response>>>;
  /** update data of the table: "member_plans" */
  update_member_plans?: Maybe<Member_Plans_Mutation_Response>;
  /** update single row of the table: "member_plans" */
  update_member_plans_by_pk?: Maybe<Member_Plans>;
  /** update multiples rows of table: "member_plans" */
  update_member_plans_many?: Maybe<Array<Maybe<Member_Plans_Mutation_Response>>>;
  /** update data of the table: "member_types" */
  update_member_types?: Maybe<Member_Types_Mutation_Response>;
  /** update single row of the table: "member_types" */
  update_member_types_by_pk?: Maybe<Member_Types>;
  /** update multiples rows of table: "member_types" */
  update_member_types_many?: Maybe<Array<Maybe<Member_Types_Mutation_Response>>>;
  /** update data of the table: "page_images" */
  update_page_images?: Maybe<Page_Images_Mutation_Response>;
  /** update single row of the table: "page_images" */
  update_page_images_by_pk?: Maybe<Page_Images>;
  /** update multiples rows of table: "page_images" */
  update_page_images_many?: Maybe<Array<Maybe<Page_Images_Mutation_Response>>>;
  /** update data of the table: "persons" */
  update_persons?: Maybe<Persons_Mutation_Response>;
  /** update single row of the table: "persons" */
  update_persons_by_pk?: Maybe<Persons>;
  /** update multiples rows of table: "persons" */
  update_persons_many?: Maybe<Array<Maybe<Persons_Mutation_Response>>>;
  /** update data of the table: "poses" */
  update_poses?: Maybe<Poses_Mutation_Response>;
  /** update single row of the table: "poses" */
  update_poses_by_pk?: Maybe<Poses>;
  /** update multiples rows of table: "poses" */
  update_poses_many?: Maybe<Array<Maybe<Poses_Mutation_Response>>>;
  /** update data of the table: "prompt_tag_types" */
  update_prompt_tag_types?: Maybe<Prompt_Tag_Types_Mutation_Response>;
  /** update single row of the table: "prompt_tag_types" */
  update_prompt_tag_types_by_pk?: Maybe<Prompt_Tag_Types>;
  /** update multiples rows of table: "prompt_tag_types" */
  update_prompt_tag_types_many?: Maybe<Array<Maybe<Prompt_Tag_Types_Mutation_Response>>>;
  /** update data of the table: "prompt_tags" */
  update_prompt_tags?: Maybe<Prompt_Tags_Mutation_Response>;
  /** update single row of the table: "prompt_tags" */
  update_prompt_tags_by_pk?: Maybe<Prompt_Tags>;
  /** update multiples rows of table: "prompt_tags" */
  update_prompt_tags_many?: Maybe<Array<Maybe<Prompt_Tags_Mutation_Response>>>;
  /** update data of the table: "scenes" */
  update_scenes?: Maybe<Scenes_Mutation_Response>;
  /** update single row of the table: "scenes" */
  update_scenes_by_pk?: Maybe<Scenes>;
  /** update multiples rows of table: "scenes" */
  update_scenes_many?: Maybe<Array<Maybe<Scenes_Mutation_Response>>>;
  /** update data of the table: "suits" */
  update_suits?: Maybe<Suits_Mutation_Response>;
  /** update single row of the table: "suits" */
  update_suits_by_pk?: Maybe<Suits>;
  /** update multiples rows of table: "suits" */
  update_suits_many?: Maybe<Array<Maybe<Suits_Mutation_Response>>>;
  /** update data of the table: "test.memo" */
  update_test_memo?: Maybe<Test_Memo_Mutation_Response>;
  /** update single row of the table: "test.memo" */
  update_test_memo_by_pk?: Maybe<Test_Memo>;
  /** update multiples rows of table: "test.memo" */
  update_test_memo_many?: Maybe<Array<Maybe<Test_Memo_Mutation_Response>>>;
  /** update data of the table: "test.user" */
  update_test_user?: Maybe<Test_User_Mutation_Response>;
  /** update single row of the table: "test.user" */
  update_test_user_by_pk?: Maybe<Test_User>;
  /** update multiples rows of table: "test.user" */
  update_test_user_many?: Maybe<Array<Maybe<Test_User_Mutation_Response>>>;
  /** update data of the table: "user_openid_mapping" */
  update_user_openid_mapping?: Maybe<User_Openid_Mapping_Mutation_Response>;
  /** update single row of the table: "user_openid_mapping" */
  update_user_openid_mapping_by_pk?: Maybe<User_Openid_Mapping>;
  /** update multiples rows of table: "user_openid_mapping" */
  update_user_openid_mapping_many?: Maybe<Array<Maybe<User_Openid_Mapping_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Ad_Watch_RecordsArgs = {
  where: Ad_Watch_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ad_Watch_Records_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Ai_FriendsArgs = {
  where: Ai_Friends_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ai_Friends_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Character_PersonalitysArgs = {
  where: Character_Personalitys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Character_Personalitys_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Character_TypesArgs = {
  where: Character_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Character_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CharactersArgs = {
  where: Characters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Characters_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Characters_SsArgs = {
  where: Characters_Ss_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Characters_Ss_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Chat_MessagesArgs = {
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chat_Messages_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ConversationsArgs = {
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Conversations_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Credit_GotArgs = {
  where: Credit_Got_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Credit_Got_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Credit_UsedArgs = {
  where: Credit_Used_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Credit_Used_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ExploreAiArgs = {
  where: ExploreAi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_ExploreAi_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Gen_TasksArgs = {
  where: Gen_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Gen_Tasks_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Global_ParamsArgs = {
  where: Global_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Global_Params_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Image_ModelsArgs = {
  where: Image_Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Image_Models_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Interaction_ModesArgs = {
  where: Interaction_Modes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Interaction_Modes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_OrdersArgs = {
  where: Member_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Orders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_PlansArgs = {
  where: Member_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Plans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Member_TypesArgs = {
  where: Member_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Member_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Page_ImagesArgs = {
  where: Page_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Page_Images_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PersonsArgs = {
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Persons_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PosesArgs = {
  where: Poses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Poses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Prompt_Tag_TypesArgs = {
  where: Prompt_Tag_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prompt_Tag_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Prompt_TagsArgs = {
  where: Prompt_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prompt_Tags_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ScenesArgs = {
  where: Scenes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scenes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SuitsArgs = {
  where: Suits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Suits_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Test_MemoArgs = {
  where: Test_Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Memo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Test_UserArgs = {
  where: Test_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_User_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_Openid_MappingArgs = {
  where: User_Openid_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Openid_Mapping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Ad_Watch_RecordsArgs = {
  objects: Array<Ad_Watch_Records_Insert_Input>;
  on_conflict?: InputMaybe<Ad_Watch_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ad_Watch_Records_OneArgs = {
  object: Ad_Watch_Records_Insert_Input;
  on_conflict?: InputMaybe<Ad_Watch_Records_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_FriendsArgs = {
  objects: Array<Ai_Friends_Insert_Input>;
  on_conflict?: InputMaybe<Ai_Friends_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ai_Friends_OneArgs = {
  object: Ai_Friends_Insert_Input;
  on_conflict?: InputMaybe<Ai_Friends_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Character_PersonalitysArgs = {
  objects: Array<Character_Personalitys_Insert_Input>;
  on_conflict?: InputMaybe<Character_Personalitys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Character_Personalitys_OneArgs = {
  object: Character_Personalitys_Insert_Input;
  on_conflict?: InputMaybe<Character_Personalitys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Character_TypesArgs = {
  objects: Array<Character_Types_Insert_Input>;
  on_conflict?: InputMaybe<Character_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Character_Types_OneArgs = {
  object: Character_Types_Insert_Input;
  on_conflict?: InputMaybe<Character_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CharactersArgs = {
  objects: Array<Characters_Insert_Input>;
  on_conflict?: InputMaybe<Characters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Characters_OneArgs = {
  object: Characters_Insert_Input;
  on_conflict?: InputMaybe<Characters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Characters_SsArgs = {
  objects: Array<Characters_Ss_Insert_Input>;
  on_conflict?: InputMaybe<Characters_Ss_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Characters_Ss_OneArgs = {
  object: Characters_Ss_Insert_Input;
  on_conflict?: InputMaybe<Characters_Ss_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_MessagesArgs = {
  objects: Array<Chat_Messages_Insert_Input>;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chat_Messages_OneArgs = {
  object: Chat_Messages_Insert_Input;
  on_conflict?: InputMaybe<Chat_Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ConversationsArgs = {
  objects: Array<Conversations_Insert_Input>;
  on_conflict?: InputMaybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Conversations_OneArgs = {
  object: Conversations_Insert_Input;
  on_conflict?: InputMaybe<Conversations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_GotArgs = {
  objects: Array<Credit_Got_Insert_Input>;
  on_conflict?: InputMaybe<Credit_Got_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_Got_OneArgs = {
  object: Credit_Got_Insert_Input;
  on_conflict?: InputMaybe<Credit_Got_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_UsedArgs = {
  objects: Array<Credit_Used_Insert_Input>;
  on_conflict?: InputMaybe<Credit_Used_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Credit_Used_OneArgs = {
  object: Credit_Used_Insert_Input;
  on_conflict?: InputMaybe<Credit_Used_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExploreAiArgs = {
  objects: Array<ExploreAi_Insert_Input>;
  on_conflict?: InputMaybe<ExploreAi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExploreAi_OneArgs = {
  object: ExploreAi_Insert_Input;
  on_conflict?: InputMaybe<ExploreAi_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gen_TasksArgs = {
  objects: Array<Gen_Tasks_Insert_Input>;
  on_conflict?: InputMaybe<Gen_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Gen_Tasks_OneArgs = {
  object: Gen_Tasks_Insert_Input;
  on_conflict?: InputMaybe<Gen_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_ParamsArgs = {
  objects: Array<Global_Params_Insert_Input>;
  on_conflict?: InputMaybe<Global_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Global_Params_OneArgs = {
  object: Global_Params_Insert_Input;
  on_conflict?: InputMaybe<Global_Params_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Image_ModelsArgs = {
  objects: Array<Image_Models_Insert_Input>;
  on_conflict?: InputMaybe<Image_Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Image_Models_OneArgs = {
  object: Image_Models_Insert_Input;
  on_conflict?: InputMaybe<Image_Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_ModesArgs = {
  objects: Array<Interaction_Modes_Insert_Input>;
  on_conflict?: InputMaybe<Interaction_Modes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Interaction_Modes_OneArgs = {
  object: Interaction_Modes_Insert_Input;
  on_conflict?: InputMaybe<Interaction_Modes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_OrdersArgs = {
  objects: Array<Member_Orders_Insert_Input>;
  on_conflict?: InputMaybe<Member_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Orders_OneArgs = {
  object: Member_Orders_Insert_Input;
  on_conflict?: InputMaybe<Member_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_PlansArgs = {
  objects: Array<Member_Plans_Insert_Input>;
  on_conflict?: InputMaybe<Member_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Plans_OneArgs = {
  object: Member_Plans_Insert_Input;
  on_conflict?: InputMaybe<Member_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_TypesArgs = {
  objects: Array<Member_Types_Insert_Input>;
  on_conflict?: InputMaybe<Member_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Member_Types_OneArgs = {
  object: Member_Types_Insert_Input;
  on_conflict?: InputMaybe<Member_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_ImagesArgs = {
  objects: Array<Page_Images_Insert_Input>;
  on_conflict?: InputMaybe<Page_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Page_Images_OneArgs = {
  object: Page_Images_Insert_Input;
  on_conflict?: InputMaybe<Page_Images_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonsArgs = {
  objects: Array<Persons_Insert_Input>;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Persons_OneArgs = {
  object: Persons_Insert_Input;
  on_conflict?: InputMaybe<Persons_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PosesArgs = {
  objects: Array<Poses_Insert_Input>;
  on_conflict?: InputMaybe<Poses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Poses_OneArgs = {
  object: Poses_Insert_Input;
  on_conflict?: InputMaybe<Poses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompt_Tag_TypesArgs = {
  objects: Array<Prompt_Tag_Types_Insert_Input>;
  on_conflict?: InputMaybe<Prompt_Tag_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompt_Tag_Types_OneArgs = {
  object: Prompt_Tag_Types_Insert_Input;
  on_conflict?: InputMaybe<Prompt_Tag_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompt_TagsArgs = {
  objects: Array<Prompt_Tags_Insert_Input>;
  on_conflict?: InputMaybe<Prompt_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prompt_Tags_OneArgs = {
  object: Prompt_Tags_Insert_Input;
  on_conflict?: InputMaybe<Prompt_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScenesArgs = {
  objects: Array<Scenes_Insert_Input>;
  on_conflict?: InputMaybe<Scenes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scenes_OneArgs = {
  object: Scenes_Insert_Input;
  on_conflict?: InputMaybe<Scenes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SuitsArgs = {
  objects: Array<Suits_Insert_Input>;
  on_conflict?: InputMaybe<Suits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Suits_OneArgs = {
  object: Suits_Insert_Input;
  on_conflict?: InputMaybe<Suits_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_MemoArgs = {
  objects: Array<Test_Memo_Insert_Input>;
  on_conflict?: InputMaybe<Test_Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Memo_OneArgs = {
  object: Test_Memo_Insert_Input;
  on_conflict?: InputMaybe<Test_Memo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_UserArgs = {
  objects: Array<Test_User_Insert_Input>;
  on_conflict?: InputMaybe<Test_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_User_OneArgs = {
  object: Test_User_Insert_Input;
  on_conflict?: InputMaybe<Test_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Openid_MappingArgs = {
  objects: Array<User_Openid_Mapping_Insert_Input>;
  on_conflict?: InputMaybe<User_Openid_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Openid_Mapping_OneArgs = {
  object: User_Openid_Mapping_Insert_Input;
  on_conflict?: InputMaybe<User_Openid_Mapping_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Ad_Watch_RecordsArgs = {
  _inc?: InputMaybe<Ad_Watch_Records_Inc_Input>;
  _set?: InputMaybe<Ad_Watch_Records_Set_Input>;
  where: Ad_Watch_Records_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ad_Watch_Records_By_PkArgs = {
  _inc?: InputMaybe<Ad_Watch_Records_Inc_Input>;
  _set?: InputMaybe<Ad_Watch_Records_Set_Input>;
  pk_columns: Ad_Watch_Records_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ad_Watch_Records_ManyArgs = {
  updates: Array<Ad_Watch_Records_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_FriendsArgs = {
  _inc?: InputMaybe<Ai_Friends_Inc_Input>;
  _set?: InputMaybe<Ai_Friends_Set_Input>;
  where: Ai_Friends_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Friends_By_PkArgs = {
  _inc?: InputMaybe<Ai_Friends_Inc_Input>;
  _set?: InputMaybe<Ai_Friends_Set_Input>;
  pk_columns: Ai_Friends_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ai_Friends_ManyArgs = {
  updates: Array<Ai_Friends_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Character_PersonalitysArgs = {
  _inc?: InputMaybe<Character_Personalitys_Inc_Input>;
  _set?: InputMaybe<Character_Personalitys_Set_Input>;
  where: Character_Personalitys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Character_Personalitys_By_PkArgs = {
  _inc?: InputMaybe<Character_Personalitys_Inc_Input>;
  _set?: InputMaybe<Character_Personalitys_Set_Input>;
  pk_columns: Character_Personalitys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Character_Personalitys_ManyArgs = {
  updates: Array<Character_Personalitys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Character_TypesArgs = {
  _inc?: InputMaybe<Character_Types_Inc_Input>;
  _set?: InputMaybe<Character_Types_Set_Input>;
  where: Character_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Character_Types_By_PkArgs = {
  _inc?: InputMaybe<Character_Types_Inc_Input>;
  _set?: InputMaybe<Character_Types_Set_Input>;
  pk_columns: Character_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Character_Types_ManyArgs = {
  updates: Array<Character_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CharactersArgs = {
  _inc?: InputMaybe<Characters_Inc_Input>;
  _set?: InputMaybe<Characters_Set_Input>;
  where: Characters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_By_PkArgs = {
  _inc?: InputMaybe<Characters_Inc_Input>;
  _set?: InputMaybe<Characters_Set_Input>;
  pk_columns: Characters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_ManyArgs = {
  updates: Array<Characters_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_SsArgs = {
  _inc?: InputMaybe<Characters_Ss_Inc_Input>;
  _set?: InputMaybe<Characters_Ss_Set_Input>;
  where: Characters_Ss_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_Ss_By_PkArgs = {
  _inc?: InputMaybe<Characters_Ss_Inc_Input>;
  _set?: InputMaybe<Characters_Ss_Set_Input>;
  pk_columns: Characters_Ss_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Characters_Ss_ManyArgs = {
  updates: Array<Characters_Ss_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_MessagesArgs = {
  _inc?: InputMaybe<Chat_Messages_Inc_Input>;
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  where: Chat_Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_By_PkArgs = {
  _inc?: InputMaybe<Chat_Messages_Inc_Input>;
  _set?: InputMaybe<Chat_Messages_Set_Input>;
  pk_columns: Chat_Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chat_Messages_ManyArgs = {
  updates: Array<Chat_Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ConversationsArgs = {
  _inc?: InputMaybe<Conversations_Inc_Input>;
  _set?: InputMaybe<Conversations_Set_Input>;
  where: Conversations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Conversations_By_PkArgs = {
  _inc?: InputMaybe<Conversations_Inc_Input>;
  _set?: InputMaybe<Conversations_Set_Input>;
  pk_columns: Conversations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Conversations_ManyArgs = {
  updates: Array<Conversations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_GotArgs = {
  _inc?: InputMaybe<Credit_Got_Inc_Input>;
  _set?: InputMaybe<Credit_Got_Set_Input>;
  where: Credit_Got_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Got_By_PkArgs = {
  _inc?: InputMaybe<Credit_Got_Inc_Input>;
  _set?: InputMaybe<Credit_Got_Set_Input>;
  pk_columns: Credit_Got_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Got_ManyArgs = {
  updates: Array<Credit_Got_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_UsedArgs = {
  _inc?: InputMaybe<Credit_Used_Inc_Input>;
  _set?: InputMaybe<Credit_Used_Set_Input>;
  where: Credit_Used_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Used_By_PkArgs = {
  _inc?: InputMaybe<Credit_Used_Inc_Input>;
  _set?: InputMaybe<Credit_Used_Set_Input>;
  pk_columns: Credit_Used_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Credit_Used_ManyArgs = {
  updates: Array<Credit_Used_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExploreAiArgs = {
  _inc?: InputMaybe<ExploreAi_Inc_Input>;
  _set?: InputMaybe<ExploreAi_Set_Input>;
  where: ExploreAi_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_ExploreAi_By_PkArgs = {
  _inc?: InputMaybe<ExploreAi_Inc_Input>;
  _set?: InputMaybe<ExploreAi_Set_Input>;
  pk_columns: ExploreAi_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ExploreAi_ManyArgs = {
  updates: Array<ExploreAi_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Gen_TasksArgs = {
  _inc?: InputMaybe<Gen_Tasks_Inc_Input>;
  _set?: InputMaybe<Gen_Tasks_Set_Input>;
  where: Gen_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Gen_Tasks_By_PkArgs = {
  _inc?: InputMaybe<Gen_Tasks_Inc_Input>;
  _set?: InputMaybe<Gen_Tasks_Set_Input>;
  pk_columns: Gen_Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Gen_Tasks_ManyArgs = {
  updates: Array<Gen_Tasks_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Global_ParamsArgs = {
  _inc?: InputMaybe<Global_Params_Inc_Input>;
  _set?: InputMaybe<Global_Params_Set_Input>;
  where: Global_Params_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Params_By_PkArgs = {
  _inc?: InputMaybe<Global_Params_Inc_Input>;
  _set?: InputMaybe<Global_Params_Set_Input>;
  pk_columns: Global_Params_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Global_Params_ManyArgs = {
  updates: Array<Global_Params_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Image_ModelsArgs = {
  _inc?: InputMaybe<Image_Models_Inc_Input>;
  _set?: InputMaybe<Image_Models_Set_Input>;
  where: Image_Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Image_Models_By_PkArgs = {
  _inc?: InputMaybe<Image_Models_Inc_Input>;
  _set?: InputMaybe<Image_Models_Set_Input>;
  pk_columns: Image_Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Image_Models_ManyArgs = {
  updates: Array<Image_Models_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_ModesArgs = {
  _inc?: InputMaybe<Interaction_Modes_Inc_Input>;
  _set?: InputMaybe<Interaction_Modes_Set_Input>;
  where: Interaction_Modes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Modes_By_PkArgs = {
  _inc?: InputMaybe<Interaction_Modes_Inc_Input>;
  _set?: InputMaybe<Interaction_Modes_Set_Input>;
  pk_columns: Interaction_Modes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Interaction_Modes_ManyArgs = {
  updates: Array<Interaction_Modes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_OrdersArgs = {
  _inc?: InputMaybe<Member_Orders_Inc_Input>;
  _set?: InputMaybe<Member_Orders_Set_Input>;
  where: Member_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Orders_By_PkArgs = {
  _inc?: InputMaybe<Member_Orders_Inc_Input>;
  _set?: InputMaybe<Member_Orders_Set_Input>;
  pk_columns: Member_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Orders_ManyArgs = {
  updates: Array<Member_Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_PlansArgs = {
  _inc?: InputMaybe<Member_Plans_Inc_Input>;
  _set?: InputMaybe<Member_Plans_Set_Input>;
  where: Member_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Plans_By_PkArgs = {
  _inc?: InputMaybe<Member_Plans_Inc_Input>;
  _set?: InputMaybe<Member_Plans_Set_Input>;
  pk_columns: Member_Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Plans_ManyArgs = {
  updates: Array<Member_Plans_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Member_TypesArgs = {
  _inc?: InputMaybe<Member_Types_Inc_Input>;
  _set?: InputMaybe<Member_Types_Set_Input>;
  where: Member_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Types_By_PkArgs = {
  _inc?: InputMaybe<Member_Types_Inc_Input>;
  _set?: InputMaybe<Member_Types_Set_Input>;
  pk_columns: Member_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Member_Types_ManyArgs = {
  updates: Array<Member_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Page_ImagesArgs = {
  _inc?: InputMaybe<Page_Images_Inc_Input>;
  _set?: InputMaybe<Page_Images_Set_Input>;
  where: Page_Images_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Page_Images_By_PkArgs = {
  _inc?: InputMaybe<Page_Images_Inc_Input>;
  _set?: InputMaybe<Page_Images_Set_Input>;
  pk_columns: Page_Images_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Page_Images_ManyArgs = {
  updates: Array<Page_Images_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PersonsArgs = {
  _inc?: InputMaybe<Persons_Inc_Input>;
  _set?: InputMaybe<Persons_Set_Input>;
  where: Persons_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_By_PkArgs = {
  _inc?: InputMaybe<Persons_Inc_Input>;
  _set?: InputMaybe<Persons_Set_Input>;
  pk_columns: Persons_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Persons_ManyArgs = {
  updates: Array<Persons_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PosesArgs = {
  _inc?: InputMaybe<Poses_Inc_Input>;
  _set?: InputMaybe<Poses_Set_Input>;
  where: Poses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Poses_By_PkArgs = {
  _inc?: InputMaybe<Poses_Inc_Input>;
  _set?: InputMaybe<Poses_Set_Input>;
  pk_columns: Poses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Poses_ManyArgs = {
  updates: Array<Poses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_Tag_TypesArgs = {
  _inc?: InputMaybe<Prompt_Tag_Types_Inc_Input>;
  _set?: InputMaybe<Prompt_Tag_Types_Set_Input>;
  where: Prompt_Tag_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_Tag_Types_By_PkArgs = {
  _inc?: InputMaybe<Prompt_Tag_Types_Inc_Input>;
  _set?: InputMaybe<Prompt_Tag_Types_Set_Input>;
  pk_columns: Prompt_Tag_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_Tag_Types_ManyArgs = {
  updates: Array<Prompt_Tag_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_TagsArgs = {
  _inc?: InputMaybe<Prompt_Tags_Inc_Input>;
  _set?: InputMaybe<Prompt_Tags_Set_Input>;
  where: Prompt_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_Tags_By_PkArgs = {
  _inc?: InputMaybe<Prompt_Tags_Inc_Input>;
  _set?: InputMaybe<Prompt_Tags_Set_Input>;
  pk_columns: Prompt_Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Prompt_Tags_ManyArgs = {
  updates: Array<Prompt_Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ScenesArgs = {
  _inc?: InputMaybe<Scenes_Inc_Input>;
  _set?: InputMaybe<Scenes_Set_Input>;
  where: Scenes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scenes_By_PkArgs = {
  _inc?: InputMaybe<Scenes_Inc_Input>;
  _set?: InputMaybe<Scenes_Set_Input>;
  pk_columns: Scenes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scenes_ManyArgs = {
  updates: Array<Scenes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SuitsArgs = {
  _inc?: InputMaybe<Suits_Inc_Input>;
  _set?: InputMaybe<Suits_Set_Input>;
  where: Suits_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Suits_By_PkArgs = {
  _inc?: InputMaybe<Suits_Inc_Input>;
  _set?: InputMaybe<Suits_Set_Input>;
  pk_columns: Suits_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Suits_ManyArgs = {
  updates: Array<Suits_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Test_MemoArgs = {
  _inc?: InputMaybe<Test_Memo_Inc_Input>;
  _set?: InputMaybe<Test_Memo_Set_Input>;
  where: Test_Memo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Memo_By_PkArgs = {
  _inc?: InputMaybe<Test_Memo_Inc_Input>;
  _set?: InputMaybe<Test_Memo_Set_Input>;
  pk_columns: Test_Memo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Memo_ManyArgs = {
  updates: Array<Test_Memo_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Test_UserArgs = {
  _inc?: InputMaybe<Test_User_Inc_Input>;
  _set?: InputMaybe<Test_User_Set_Input>;
  where: Test_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_User_By_PkArgs = {
  _inc?: InputMaybe<Test_User_Inc_Input>;
  _set?: InputMaybe<Test_User_Set_Input>;
  pk_columns: Test_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_User_ManyArgs = {
  updates: Array<Test_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Openid_MappingArgs = {
  _inc?: InputMaybe<User_Openid_Mapping_Inc_Input>;
  _set?: InputMaybe<User_Openid_Mapping_Set_Input>;
  where: User_Openid_Mapping_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Openid_Mapping_By_PkArgs = {
  _inc?: InputMaybe<User_Openid_Mapping_Inc_Input>;
  _set?: InputMaybe<User_Openid_Mapping_Set_Input>;
  pk_columns: User_Openid_Mapping_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Openid_Mapping_ManyArgs = {
  updates: Array<User_Openid_Mapping_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** 页面图片表 */
export type Page_Images = {
  __typename?: 'page_images';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 编号 */
  id2?: Maybe<Scalars['bigint']['output']>;
  /** 图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "page_images" */
export type Page_Images_Aggregate = {
  __typename?: 'page_images_aggregate';
  aggregate?: Maybe<Page_Images_Aggregate_Fields>;
  nodes: Array<Page_Images>;
};

/** aggregate fields of "page_images" */
export type Page_Images_Aggregate_Fields = {
  __typename?: 'page_images_aggregate_fields';
  avg?: Maybe<Page_Images_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Page_Images_Max_Fields>;
  min?: Maybe<Page_Images_Min_Fields>;
  stddev?: Maybe<Page_Images_Stddev_Fields>;
  stddev_pop?: Maybe<Page_Images_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Page_Images_Stddev_Samp_Fields>;
  sum?: Maybe<Page_Images_Sum_Fields>;
  var_pop?: Maybe<Page_Images_Var_Pop_Fields>;
  var_samp?: Maybe<Page_Images_Var_Samp_Fields>;
  variance?: Maybe<Page_Images_Variance_Fields>;
};


/** aggregate fields of "page_images" */
export type Page_Images_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Page_Images_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Page_Images_Avg_Fields = {
  __typename?: 'page_images_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "page_images". All fields are combined with a logical 'AND'. */
export type Page_Images_Bool_Exp = {
  _and?: InputMaybe<Array<Page_Images_Bool_Exp>>;
  _not?: InputMaybe<Page_Images_Bool_Exp>;
  _or?: InputMaybe<Array<Page_Images_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  id2?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "page_images" */
export enum Page_Images_Constraint {
  /** unique or primary key constraint on columns "id" */
  PageImagesPkey = 'page_images_pkey'
}

/** input type for incrementing numeric columns in table "page_images" */
export type Page_Images_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 编号 */
  id2?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "page_images" */
export type Page_Images_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 编号 */
  id2?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Page_Images_Max_Fields = {
  __typename?: 'page_images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['bigint']['output']>;
  /** 图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Page_Images_Min_Fields = {
  __typename?: 'page_images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['bigint']['output']>;
  /** 图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "page_images" */
export type Page_Images_Mutation_Response = {
  __typename?: 'page_images_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Page_Images>;
};

/** on_conflict condition type for table "page_images" */
export type Page_Images_On_Conflict = {
  constraint: Page_Images_Constraint;
  update_columns?: Array<Page_Images_Update_Column>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};

/** Ordering options when selecting data from "page_images". */
export type Page_Images_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id2?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: page_images */
export type Page_Images_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "page_images" */
export enum Page_Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Id2 = 'id2',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "page_images" */
export type Page_Images_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 编号 */
  id2?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Page_Images_Stddev_Fields = {
  __typename?: 'page_images_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Page_Images_Stddev_Pop_Fields = {
  __typename?: 'page_images_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Page_Images_Stddev_Samp_Fields = {
  __typename?: 'page_images_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "page_images" */
export type Page_Images_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Page_Images_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Page_Images_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 编号 */
  id2?: InputMaybe<Scalars['bigint']['input']>;
  /** 图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Page_Images_Sum_Fields = {
  __typename?: 'page_images_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "page_images" */
export enum Page_Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Id2 = 'id2',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Page_Images_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Page_Images_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Page_Images_Set_Input>;
  /** filter the rows which have to be updated */
  where: Page_Images_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Page_Images_Var_Pop_Fields = {
  __typename?: 'page_images_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Page_Images_Var_Samp_Fields = {
  __typename?: 'page_images_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Page_Images_Variance_Fields = {
  __typename?: 'page_images_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 编号 */
  id2?: Maybe<Scalars['Float']['output']>;
};

/** 梦幻人物表 */
export type Persons = {
  __typename?: 'persons';
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 人物图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 人物名称 */
  name: Scalars['String']['output'];
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "persons" */
export type Persons_Aggregate = {
  __typename?: 'persons_aggregate';
  aggregate?: Maybe<Persons_Aggregate_Fields>;
  nodes: Array<Persons>;
};

/** aggregate fields of "persons" */
export type Persons_Aggregate_Fields = {
  __typename?: 'persons_aggregate_fields';
  avg?: Maybe<Persons_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Persons_Max_Fields>;
  min?: Maybe<Persons_Min_Fields>;
  stddev?: Maybe<Persons_Stddev_Fields>;
  stddev_pop?: Maybe<Persons_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Persons_Stddev_Samp_Fields>;
  sum?: Maybe<Persons_Sum_Fields>;
  var_pop?: Maybe<Persons_Var_Pop_Fields>;
  var_samp?: Maybe<Persons_Var_Samp_Fields>;
  variance?: Maybe<Persons_Variance_Fields>;
};


/** aggregate fields of "persons" */
export type Persons_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Persons_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Persons_Avg_Fields = {
  __typename?: 'persons_avg_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "persons". All fields are combined with a logical 'AND'. */
export type Persons_Bool_Exp = {
  _and?: InputMaybe<Array<Persons_Bool_Exp>>;
  _not?: InputMaybe<Persons_Bool_Exp>;
  _or?: InputMaybe<Array<Persons_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cost?: InputMaybe<Bigint_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  lora?: InputMaybe<String_Comparison_Exp>;
  lora_weight?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  negative_prompt?: InputMaybe<String_Comparison_Exp>;
  positive_prompt?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "persons" */
export enum Persons_Constraint {
  /** unique or primary key constraint on columns "id" */
  DreamCharactersPkey = 'dream_characters_pkey'
}

/** input type for incrementing numeric columns in table "persons" */
export type Persons_Inc_Input = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "persons" */
export type Persons_Insert_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 人物图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 人物名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Persons_Max_Fields = {
  __typename?: 'persons_max_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 人物图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 人物名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Persons_Min_Fields = {
  __typename?: 'persons_min_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 人物图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 人物名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "persons" */
export type Persons_Mutation_Response = {
  __typename?: 'persons_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Persons>;
};

/** on_conflict condition type for table "persons" */
export type Persons_On_Conflict = {
  constraint: Persons_Constraint;
  update_columns?: Array<Persons_Update_Column>;
  where?: InputMaybe<Persons_Bool_Exp>;
};

/** Ordering options when selecting data from "persons". */
export type Persons_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_cost?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  lora?: InputMaybe<Order_By>;
  lora_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  negative_prompt?: InputMaybe<Order_By>;
  positive_prompt?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: persons */
export type Persons_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "persons" */
export enum Persons_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

/** input type for updating data in table "persons" */
export type Persons_Set_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 人物图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 人物名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Persons_Stddev_Fields = {
  __typename?: 'persons_stddev_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Persons_Stddev_Pop_Fields = {
  __typename?: 'persons_stddev_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Persons_Stddev_Samp_Fields = {
  __typename?: 'persons_stddev_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "persons" */
export type Persons_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Persons_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Persons_Stream_Cursor_Value_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 人物图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 人物名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Persons_Sum_Fields = {
  __typename?: 'persons_sum_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "persons" */
export enum Persons_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

export type Persons_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Persons_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Persons_Set_Input>;
  /** filter the rows which have to be updated */
  where: Persons_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Persons_Var_Pop_Fields = {
  __typename?: 'persons_var_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Persons_Var_Samp_Fields = {
  __typename?: 'persons_var_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Persons_Variance_Fields = {
  __typename?: 'persons_variance_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** 固定姿态表 */
export type Poses = {
  __typename?: 'poses';
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 姿态图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 高清 */
  is_HD?: Maybe<Scalars['Boolean']['output']>;
  /** 姿态名称 */
  name: Scalars['String']['output'];
  /** 正向词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 骨骼图URL */
  skeleton_image_url?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "poses" */
export type Poses_Aggregate = {
  __typename?: 'poses_aggregate';
  aggregate?: Maybe<Poses_Aggregate_Fields>;
  nodes: Array<Poses>;
};

/** aggregate fields of "poses" */
export type Poses_Aggregate_Fields = {
  __typename?: 'poses_aggregate_fields';
  avg?: Maybe<Poses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Poses_Max_Fields>;
  min?: Maybe<Poses_Min_Fields>;
  stddev?: Maybe<Poses_Stddev_Fields>;
  stddev_pop?: Maybe<Poses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Poses_Stddev_Samp_Fields>;
  sum?: Maybe<Poses_Sum_Fields>;
  var_pop?: Maybe<Poses_Var_Pop_Fields>;
  var_samp?: Maybe<Poses_Var_Samp_Fields>;
  variance?: Maybe<Poses_Variance_Fields>;
};


/** aggregate fields of "poses" */
export type Poses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Poses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Poses_Avg_Fields = {
  __typename?: 'poses_avg_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "poses". All fields are combined with a logical 'AND'. */
export type Poses_Bool_Exp = {
  _and?: InputMaybe<Array<Poses_Bool_Exp>>;
  _not?: InputMaybe<Poses_Bool_Exp>;
  _or?: InputMaybe<Array<Poses_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cost?: InputMaybe<Bigint_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_HD?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  positive_prompt?: InputMaybe<String_Comparison_Exp>;
  skeleton_image_url?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "poses" */
export enum Poses_Constraint {
  /** unique or primary key constraint on columns "id" */
  FixedPosesPkey = 'fixed_poses_pkey'
}

/** input type for incrementing numeric columns in table "poses" */
export type Poses_Inc_Input = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "poses" */
export type Poses_Insert_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 姿态图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** 姿态名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 正向词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 骨骼图URL */
  skeleton_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Poses_Max_Fields = {
  __typename?: 'poses_max_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 姿态图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 姿态名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 正向词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 骨骼图URL */
  skeleton_image_url?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Poses_Min_Fields = {
  __typename?: 'poses_min_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 姿态图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 姿态名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 正向词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 骨骼图URL */
  skeleton_image_url?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "poses" */
export type Poses_Mutation_Response = {
  __typename?: 'poses_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Poses>;
};

/** on_conflict condition type for table "poses" */
export type Poses_On_Conflict = {
  constraint: Poses_Constraint;
  update_columns?: Array<Poses_Update_Column>;
  where?: InputMaybe<Poses_Bool_Exp>;
};

/** Ordering options when selecting data from "poses". */
export type Poses_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_cost?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_HD?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  positive_prompt?: InputMaybe<Order_By>;
  skeleton_image_url?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: poses */
export type Poses_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "poses" */
export enum Poses_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Name = 'name',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  SkeletonImageUrl = 'skeleton_image_url',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

/** input type for updating data in table "poses" */
export type Poses_Set_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 姿态图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** 姿态名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 正向词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 骨骼图URL */
  skeleton_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Poses_Stddev_Fields = {
  __typename?: 'poses_stddev_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Poses_Stddev_Pop_Fields = {
  __typename?: 'poses_stddev_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Poses_Stddev_Samp_Fields = {
  __typename?: 'poses_stddev_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "poses" */
export type Poses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Poses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Poses_Stream_Cursor_Value_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 姿态图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** 姿态名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 正向词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 骨骼图URL */
  skeleton_image_url?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Poses_Sum_Fields = {
  __typename?: 'poses_sum_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "poses" */
export enum Poses_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Name = 'name',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  SkeletonImageUrl = 'skeleton_image_url',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

export type Poses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Poses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Poses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Poses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Poses_Var_Pop_Fields = {
  __typename?: 'poses_var_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Poses_Var_Samp_Fields = {
  __typename?: 'poses_var_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Poses_Variance_Fields = {
  __typename?: 'poses_variance_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** 标签分类表 */
export type Prompt_Tag_Types = {
  __typename?: 'prompt_tag_types';
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  /** 分类名称 */
  name: Scalars['String']['output'];
  /** 排序 */
  sort: Scalars['bigint']['output'];
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "prompt_tag_types" */
export type Prompt_Tag_Types_Aggregate = {
  __typename?: 'prompt_tag_types_aggregate';
  aggregate?: Maybe<Prompt_Tag_Types_Aggregate_Fields>;
  nodes: Array<Prompt_Tag_Types>;
};

/** aggregate fields of "prompt_tag_types" */
export type Prompt_Tag_Types_Aggregate_Fields = {
  __typename?: 'prompt_tag_types_aggregate_fields';
  avg?: Maybe<Prompt_Tag_Types_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Prompt_Tag_Types_Max_Fields>;
  min?: Maybe<Prompt_Tag_Types_Min_Fields>;
  stddev?: Maybe<Prompt_Tag_Types_Stddev_Fields>;
  stddev_pop?: Maybe<Prompt_Tag_Types_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prompt_Tag_Types_Stddev_Samp_Fields>;
  sum?: Maybe<Prompt_Tag_Types_Sum_Fields>;
  var_pop?: Maybe<Prompt_Tag_Types_Var_Pop_Fields>;
  var_samp?: Maybe<Prompt_Tag_Types_Var_Samp_Fields>;
  variance?: Maybe<Prompt_Tag_Types_Variance_Fields>;
};


/** aggregate fields of "prompt_tag_types" */
export type Prompt_Tag_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prompt_Tag_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Prompt_Tag_Types_Avg_Fields = {
  __typename?: 'prompt_tag_types_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "prompt_tag_types". All fields are combined with a logical 'AND'. */
export type Prompt_Tag_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Prompt_Tag_Types_Bool_Exp>>;
  _not?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Prompt_Tag_Types_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "prompt_tag_types" */
export enum Prompt_Tag_Types_Constraint {
  /** unique or primary key constraint on columns "id" */
  TagCategorysPkey = 'tag_categorys_pkey'
}

/** input type for incrementing numeric columns in table "prompt_tag_types" */
export type Prompt_Tag_Types_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "prompt_tag_types" */
export type Prompt_Tag_Types_Insert_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Prompt_Tag_Types_Max_Fields = {
  __typename?: 'prompt_tag_types_max_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Prompt_Tag_Types_Min_Fields = {
  __typename?: 'prompt_tag_types_min_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 分类名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "prompt_tag_types" */
export type Prompt_Tag_Types_Mutation_Response = {
  __typename?: 'prompt_tag_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompt_Tag_Types>;
};

/** on_conflict condition type for table "prompt_tag_types" */
export type Prompt_Tag_Types_On_Conflict = {
  constraint: Prompt_Tag_Types_Constraint;
  update_columns?: Array<Prompt_Tag_Types_Update_Column>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "prompt_tag_types". */
export type Prompt_Tag_Types_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prompt_tag_types */
export type Prompt_Tag_Types_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "prompt_tag_types" */
export enum Prompt_Tag_Types_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "prompt_tag_types" */
export type Prompt_Tag_Types_Set_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Prompt_Tag_Types_Stddev_Fields = {
  __typename?: 'prompt_tag_types_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Prompt_Tag_Types_Stddev_Pop_Fields = {
  __typename?: 'prompt_tag_types_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Prompt_Tag_Types_Stddev_Samp_Fields = {
  __typename?: 'prompt_tag_types_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "prompt_tag_types" */
export type Prompt_Tag_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prompt_Tag_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prompt_Tag_Types_Stream_Cursor_Value_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 分类名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Prompt_Tag_Types_Sum_Fields = {
  __typename?: 'prompt_tag_types_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "prompt_tag_types" */
export enum Prompt_Tag_Types_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Prompt_Tag_Types_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Prompt_Tag_Types_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prompt_Tag_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prompt_Tag_Types_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Prompt_Tag_Types_Var_Pop_Fields = {
  __typename?: 'prompt_tag_types_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Prompt_Tag_Types_Var_Samp_Fields = {
  __typename?: 'prompt_tag_types_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Prompt_Tag_Types_Variance_Fields = {
  __typename?: 'prompt_tag_types_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
};

/** 标签表 */
export type Prompt_Tags = {
  __typename?: 'prompt_tags';
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 显示等级 */
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 标签图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 是否热门标签 */
  is_hot: Scalars['Boolean']['output'];
  /** 标签名称 */
  name: Scalars['String']['output'];
  /** 提示词/描述 */
  prompt?: Maybe<Scalars['String']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "prompt_tags" */
export type Prompt_Tags_Aggregate = {
  __typename?: 'prompt_tags_aggregate';
  aggregate?: Maybe<Prompt_Tags_Aggregate_Fields>;
  nodes: Array<Prompt_Tags>;
};

/** aggregate fields of "prompt_tags" */
export type Prompt_Tags_Aggregate_Fields = {
  __typename?: 'prompt_tags_aggregate_fields';
  avg?: Maybe<Prompt_Tags_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Prompt_Tags_Max_Fields>;
  min?: Maybe<Prompt_Tags_Min_Fields>;
  stddev?: Maybe<Prompt_Tags_Stddev_Fields>;
  stddev_pop?: Maybe<Prompt_Tags_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prompt_Tags_Stddev_Samp_Fields>;
  sum?: Maybe<Prompt_Tags_Sum_Fields>;
  var_pop?: Maybe<Prompt_Tags_Var_Pop_Fields>;
  var_samp?: Maybe<Prompt_Tags_Var_Samp_Fields>;
  variance?: Maybe<Prompt_Tags_Variance_Fields>;
};


/** aggregate fields of "prompt_tags" */
export type Prompt_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Prompt_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Prompt_Tags_Avg_Fields = {
  __typename?: 'prompt_tags_avg_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "prompt_tags". All fields are combined with a logical 'AND'. */
export type Prompt_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Prompt_Tags_Bool_Exp>>;
  _not?: InputMaybe<Prompt_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Prompt_Tags_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_hot?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  prompt?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  tag_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "prompt_tags" */
export enum Prompt_Tags_Constraint {
  /** unique or primary key constraint on columns "id" */
  CustomTagsPkey = 'custom_tags_pkey'
}

/** input type for incrementing numeric columns in table "prompt_tags" */
export type Prompt_Tags_Inc_Input = {
  /** 显示等级 */
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 排序序号 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签分类ID */
  tag_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "prompt_tags" */
export type Prompt_Tags_Insert_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 显示等级 */
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门标签 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 标签名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 提示词/描述 */
  prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序序号 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签分类ID */
  tag_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Prompt_Tags_Max_Fields = {
  __typename?: 'prompt_tags_max_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 显示等级 */
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 标签图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 标签名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 提示词/描述 */
  prompt?: Maybe<Scalars['String']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Prompt_Tags_Min_Fields = {
  __typename?: 'prompt_tags_min_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 显示等级 */
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 标签图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 标签名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 提示词/描述 */
  prompt?: Maybe<Scalars['String']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "prompt_tags" */
export type Prompt_Tags_Mutation_Response = {
  __typename?: 'prompt_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Prompt_Tags>;
};

/** on_conflict condition type for table "prompt_tags" */
export type Prompt_Tags_On_Conflict = {
  constraint: Prompt_Tags_Constraint;
  update_columns?: Array<Prompt_Tags_Update_Column>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "prompt_tags". */
export type Prompt_Tags_Order_By = {
  created_at?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_hot?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  prompt?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  tag_type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: prompt_tags */
export type Prompt_Tags_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "prompt_tags" */
export enum Prompt_Tags_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  Name = 'name',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  TagTypeId = 'tag_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

/** input type for updating data in table "prompt_tags" */
export type Prompt_Tags_Set_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 显示等级 */
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门标签 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 标签名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 提示词/描述 */
  prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序序号 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签分类ID */
  tag_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Prompt_Tags_Stddev_Fields = {
  __typename?: 'prompt_tags_stddev_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Prompt_Tags_Stddev_Pop_Fields = {
  __typename?: 'prompt_tags_stddev_pop_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Prompt_Tags_Stddev_Samp_Fields = {
  __typename?: 'prompt_tags_stddev_samp_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "prompt_tags" */
export type Prompt_Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Prompt_Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Prompt_Tags_Stream_Cursor_Value_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 显示等级 */
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否热门标签 */
  is_hot?: InputMaybe<Scalars['Boolean']['input']>;
  /** 标签名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 提示词/描述 */
  prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序序号 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 标签分类ID */
  tag_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 使用等级 */
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Prompt_Tags_Sum_Fields = {
  __typename?: 'prompt_tags_sum_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "prompt_tags" */
export enum Prompt_Tags_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHot = 'is_hot',
  /** column name */
  Name = 'name',
  /** column name */
  Prompt = 'prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  TagTypeId = 'tag_type_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

export type Prompt_Tags_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Prompt_Tags_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Prompt_Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Prompt_Tags_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Prompt_Tags_Var_Pop_Fields = {
  __typename?: 'prompt_tags_var_pop_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Prompt_Tags_Var_Samp_Fields = {
  __typename?: 'prompt_tags_var_samp_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Prompt_Tags_Variance_Fields = {
  __typename?: 'prompt_tags_variance_fields';
  /** 显示等级 */
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 排序序号 */
  sort?: Maybe<Scalars['Float']['output']>;
  /** 标签分类ID */
  tag_type_id?: Maybe<Scalars['Float']['output']>;
  /** 使用等级 */
  use_level?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ad_watch_records" */
  ad_watch_records: Array<Ad_Watch_Records>;
  /** fetch aggregated fields from the table: "ad_watch_records" */
  ad_watch_records_aggregate: Ad_Watch_Records_Aggregate;
  /** fetch data from the table: "ad_watch_records" using primary key columns */
  ad_watch_records_by_pk?: Maybe<Ad_Watch_Records>;
  /** fetch data from the table: "ai_friends" */
  ai_friends: Array<Ai_Friends>;
  /** fetch aggregated fields from the table: "ai_friends" */
  ai_friends_aggregate: Ai_Friends_Aggregate;
  /** fetch data from the table: "ai_friends" using primary key columns */
  ai_friends_by_pk?: Maybe<Ai_Friends>;
  /** fetch data from the table: "character_personalitys" */
  character_personalitys: Array<Character_Personalitys>;
  /** fetch aggregated fields from the table: "character_personalitys" */
  character_personalitys_aggregate: Character_Personalitys_Aggregate;
  /** fetch data from the table: "character_personalitys" using primary key columns */
  character_personalitys_by_pk?: Maybe<Character_Personalitys>;
  /** fetch data from the table: "character_types" */
  character_types: Array<Character_Types>;
  /** fetch aggregated fields from the table: "character_types" */
  character_types_aggregate: Character_Types_Aggregate;
  /** fetch data from the table: "character_types" using primary key columns */
  character_types_by_pk?: Maybe<Character_Types>;
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch aggregated fields from the table: "characters" */
  characters_aggregate: Characters_Aggregate;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** fetch data from the table: "characters_ss" */
  characters_ss: Array<Characters_Ss>;
  /** fetch aggregated fields from the table: "characters_ss" */
  characters_ss_aggregate: Characters_Ss_Aggregate;
  /** fetch data from the table: "characters_ss" using primary key columns */
  characters_ss_by_pk?: Maybe<Characters_Ss>;
  /** fetch data from the table: "chat_messages" */
  chat_messages: Array<Chat_Messages>;
  /** fetch aggregated fields from the table: "chat_messages" */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk?: Maybe<Conversations>;
  /** fetch data from the table: "credit_got" */
  credit_got: Array<Credit_Got>;
  /** fetch aggregated fields from the table: "credit_got" */
  credit_got_aggregate: Credit_Got_Aggregate;
  /** fetch data from the table: "credit_got" using primary key columns */
  credit_got_by_pk?: Maybe<Credit_Got>;
  /** fetch data from the table: "credit_used" */
  credit_used: Array<Credit_Used>;
  /** fetch aggregated fields from the table: "credit_used" */
  credit_used_aggregate: Credit_Used_Aggregate;
  /** fetch data from the table: "credit_used" using primary key columns */
  credit_used_by_pk?: Maybe<Credit_Used>;
  /** fetch data from the table: "exploreAI" */
  exploreAI: Array<ExploreAi>;
  /** fetch aggregated fields from the table: "exploreAI" */
  exploreAI_aggregate: ExploreAi_Aggregate;
  /** fetch data from the table: "exploreAI" using primary key columns */
  exploreAI_by_pk?: Maybe<ExploreAi>;
  /** fetch data from the table: "gen_tasks" */
  gen_tasks: Array<Gen_Tasks>;
  /** fetch aggregated fields from the table: "gen_tasks" */
  gen_tasks_aggregate: Gen_Tasks_Aggregate;
  /** fetch data from the table: "gen_tasks" using primary key columns */
  gen_tasks_by_pk?: Maybe<Gen_Tasks>;
  /** fetch data from the table: "global_params" */
  global_params: Array<Global_Params>;
  /** fetch aggregated fields from the table: "global_params" */
  global_params_aggregate: Global_Params_Aggregate;
  /** fetch data from the table: "global_params" using primary key columns */
  global_params_by_pk?: Maybe<Global_Params>;
  /** fetch data from the table: "image_models" */
  image_models: Array<Image_Models>;
  /** fetch aggregated fields from the table: "image_models" */
  image_models_aggregate: Image_Models_Aggregate;
  /** fetch data from the table: "image_models" using primary key columns */
  image_models_by_pk?: Maybe<Image_Models>;
  /** fetch data from the table: "interaction_modes" */
  interaction_modes: Array<Interaction_Modes>;
  /** fetch aggregated fields from the table: "interaction_modes" */
  interaction_modes_aggregate: Interaction_Modes_Aggregate;
  /** fetch data from the table: "interaction_modes" using primary key columns */
  interaction_modes_by_pk?: Maybe<Interaction_Modes>;
  /** fetch data from the table: "member_orders" */
  member_orders: Array<Member_Orders>;
  /** fetch aggregated fields from the table: "member_orders" */
  member_orders_aggregate: Member_Orders_Aggregate;
  /** fetch data from the table: "member_orders" using primary key columns */
  member_orders_by_pk?: Maybe<Member_Orders>;
  /** fetch data from the table: "member_plans" */
  member_plans: Array<Member_Plans>;
  /** fetch aggregated fields from the table: "member_plans" */
  member_plans_aggregate: Member_Plans_Aggregate;
  /** fetch data from the table: "member_plans" using primary key columns */
  member_plans_by_pk?: Maybe<Member_Plans>;
  /** fetch data from the table: "member_types" */
  member_types: Array<Member_Types>;
  /** fetch aggregated fields from the table: "member_types" */
  member_types_aggregate: Member_Types_Aggregate;
  /** fetch data from the table: "member_types" using primary key columns */
  member_types_by_pk?: Maybe<Member_Types>;
  /** fetch data from the table: "page_images" */
  page_images: Array<Page_Images>;
  /** fetch aggregated fields from the table: "page_images" */
  page_images_aggregate: Page_Images_Aggregate;
  /** fetch data from the table: "page_images" using primary key columns */
  page_images_by_pk?: Maybe<Page_Images>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** fetch data from the table: "poses" */
  poses: Array<Poses>;
  /** fetch aggregated fields from the table: "poses" */
  poses_aggregate: Poses_Aggregate;
  /** fetch data from the table: "poses" using primary key columns */
  poses_by_pk?: Maybe<Poses>;
  /** fetch data from the table: "prompt_tag_types" */
  prompt_tag_types: Array<Prompt_Tag_Types>;
  /** fetch aggregated fields from the table: "prompt_tag_types" */
  prompt_tag_types_aggregate: Prompt_Tag_Types_Aggregate;
  /** fetch data from the table: "prompt_tag_types" using primary key columns */
  prompt_tag_types_by_pk?: Maybe<Prompt_Tag_Types>;
  /** fetch data from the table: "prompt_tags" */
  prompt_tags: Array<Prompt_Tags>;
  /** fetch aggregated fields from the table: "prompt_tags" */
  prompt_tags_aggregate: Prompt_Tags_Aggregate;
  /** fetch data from the table: "prompt_tags" using primary key columns */
  prompt_tags_by_pk?: Maybe<Prompt_Tags>;
  /** fetch data from the table: "scenes" */
  scenes: Array<Scenes>;
  /** fetch aggregated fields from the table: "scenes" */
  scenes_aggregate: Scenes_Aggregate;
  /** fetch data from the table: "scenes" using primary key columns */
  scenes_by_pk?: Maybe<Scenes>;
  /** fetch data from the table: "suits" */
  suits: Array<Suits>;
  /** fetch aggregated fields from the table: "suits" */
  suits_aggregate: Suits_Aggregate;
  /** fetch data from the table: "suits" using primary key columns */
  suits_by_pk?: Maybe<Suits>;
  /** fetch data from the table: "test.memo" */
  test_memo: Array<Test_Memo>;
  /** fetch aggregated fields from the table: "test.memo" */
  test_memo_aggregate: Test_Memo_Aggregate;
  /** fetch data from the table: "test.memo" using primary key columns */
  test_memo_by_pk?: Maybe<Test_Memo>;
  /** fetch data from the table: "test.user" */
  test_user: Array<Test_User>;
  /** fetch aggregated fields from the table: "test.user" */
  test_user_aggregate: Test_User_Aggregate;
  /** fetch data from the table: "test.user" using primary key columns */
  test_user_by_pk?: Maybe<Test_User>;
  /** fetch data from the table: "user_openid_mapping" */
  user_openid_mapping: Array<User_Openid_Mapping>;
  /** fetch aggregated fields from the table: "user_openid_mapping" */
  user_openid_mapping_aggregate: User_Openid_Mapping_Aggregate;
  /** fetch data from the table: "user_openid_mapping" using primary key columns */
  user_openid_mapping_by_pk?: Maybe<User_Openid_Mapping>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAd_Watch_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Ad_Watch_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ad_Watch_Records_Order_By>>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};


export type Query_RootAd_Watch_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ad_Watch_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ad_Watch_Records_Order_By>>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};


export type Query_RootAd_Watch_Records_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootAi_FriendsArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


export type Query_RootAi_Friends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


export type Query_RootAi_Friends_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCharacter_PersonalitysArgs = {
  distinct_on?: InputMaybe<Array<Character_Personalitys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Personalitys_Order_By>>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};


export type Query_RootCharacter_Personalitys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Character_Personalitys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Personalitys_Order_By>>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};


export type Query_RootCharacter_Personalitys_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCharacter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Character_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Types_Order_By>>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};


export type Query_RootCharacter_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Character_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Types_Order_By>>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};


export type Query_RootCharacter_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCharactersArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCharacters_SsArgs = {
  distinct_on?: InputMaybe<Array<Characters_Ss_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Ss_Order_By>>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};


export type Query_RootCharacters_Ss_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Ss_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Ss_Order_By>>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};


export type Query_RootCharacters_Ss_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Query_RootChat_Messages_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootConversationsArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


export type Query_RootConversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


export type Query_RootConversations_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCredit_GotArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


export type Query_RootCredit_Got_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


export type Query_RootCredit_Got_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootCredit_UsedArgs = {
  distinct_on?: InputMaybe<Array<Credit_Used_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Used_Order_By>>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};


export type Query_RootCredit_Used_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Used_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Used_Order_By>>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};


export type Query_RootCredit_Used_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootExploreAiArgs = {
  distinct_on?: InputMaybe<Array<ExploreAi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExploreAi_Order_By>>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};


export type Query_RootExploreAi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ExploreAi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExploreAi_Order_By>>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};


export type Query_RootExploreAi_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGen_TasksArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


export type Query_RootGen_Tasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


export type Query_RootGen_Tasks_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootGlobal_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Global_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Params_Order_By>>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};


export type Query_RootGlobal_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Params_Order_By>>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};


export type Query_RootGlobal_Params_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootImage_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Image_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Models_Order_By>>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};


export type Query_RootImage_Models_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Models_Order_By>>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};


export type Query_RootImage_Models_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootInteraction_ModesArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Modes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interaction_Modes_Order_By>>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};


export type Query_RootInteraction_Modes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Modes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interaction_Modes_Order_By>>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};


export type Query_RootInteraction_Modes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMember_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


export type Query_RootMember_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


export type Query_RootMember_Orders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMember_PlansArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


export type Query_RootMember_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


export type Query_RootMember_Plans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootMember_TypesArgs = {
  distinct_on?: InputMaybe<Array<Member_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Types_Order_By>>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};


export type Query_RootMember_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Types_Order_By>>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};


export type Query_RootMember_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootPage_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Page_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Images_Order_By>>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};


export type Query_RootPage_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Images_Order_By>>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};


export type Query_RootPage_Images_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Query_RootPersons_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPosesArgs = {
  distinct_on?: InputMaybe<Array<Poses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poses_Order_By>>;
  where?: InputMaybe<Poses_Bool_Exp>;
};


export type Query_RootPoses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poses_Order_By>>;
  where?: InputMaybe<Poses_Bool_Exp>;
};


export type Query_RootPoses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPrompt_Tag_TypesArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tag_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tag_Types_Order_By>>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};


export type Query_RootPrompt_Tag_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tag_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tag_Types_Order_By>>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};


export type Query_RootPrompt_Tag_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootPrompt_TagsArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tags_Order_By>>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};


export type Query_RootPrompt_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tags_Order_By>>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};


export type Query_RootPrompt_Tags_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootScenesArgs = {
  distinct_on?: InputMaybe<Array<Scenes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scenes_Order_By>>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};


export type Query_RootScenes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scenes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scenes_Order_By>>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};


export type Query_RootScenes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootSuitsArgs = {
  distinct_on?: InputMaybe<Array<Suits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suits_Order_By>>;
  where?: InputMaybe<Suits_Bool_Exp>;
};


export type Query_RootSuits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suits_Order_By>>;
  where?: InputMaybe<Suits_Bool_Exp>;
};


export type Query_RootSuits_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTest_MemoArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


export type Query_RootTest_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


export type Query_RootTest_Memo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootTest_UserArgs = {
  distinct_on?: InputMaybe<Array<Test_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_User_Order_By>>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};


export type Query_RootTest_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_User_Order_By>>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};


export type Query_RootTest_User_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUser_Openid_MappingArgs = {
  distinct_on?: InputMaybe<Array<User_Openid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Openid_Mapping_Order_By>>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};


export type Query_RootUser_Openid_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Openid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Openid_Mapping_Order_By>>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};


export type Query_RootUser_Openid_Mapping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** 场景表 */
export type Scenes = {
  __typename?: 'scenes';
  /** An array relationship */
  chat: Array<Conversations>;
  /** An aggregate relationship */
  chat_aggregate: Conversations_Aggregate;
  /** 场景内容 */
  content: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  img_url?: Maybe<Scalars['String']['output']>;
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 名称 */
  name: Scalars['String']['output'];
  sort_order?: Maybe<Scalars['numeric']['output']>;
  updated_at: Scalars['timestamptz']['output'];
};


/** 场景表 */
export type ScenesChatArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


/** 场景表 */
export type ScenesChat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};

/** aggregated selection of "scenes" */
export type Scenes_Aggregate = {
  __typename?: 'scenes_aggregate';
  aggregate?: Maybe<Scenes_Aggregate_Fields>;
  nodes: Array<Scenes>;
};

/** aggregate fields of "scenes" */
export type Scenes_Aggregate_Fields = {
  __typename?: 'scenes_aggregate_fields';
  avg?: Maybe<Scenes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scenes_Max_Fields>;
  min?: Maybe<Scenes_Min_Fields>;
  stddev?: Maybe<Scenes_Stddev_Fields>;
  stddev_pop?: Maybe<Scenes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scenes_Stddev_Samp_Fields>;
  sum?: Maybe<Scenes_Sum_Fields>;
  var_pop?: Maybe<Scenes_Var_Pop_Fields>;
  var_samp?: Maybe<Scenes_Var_Samp_Fields>;
  variance?: Maybe<Scenes_Variance_Fields>;
};


/** aggregate fields of "scenes" */
export type Scenes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scenes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Scenes_Avg_Fields = {
  __typename?: 'scenes_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scenes". All fields are combined with a logical 'AND'. */
export type Scenes_Bool_Exp = {
  _and?: InputMaybe<Array<Scenes_Bool_Exp>>;
  _not?: InputMaybe<Scenes_Bool_Exp>;
  _or?: InputMaybe<Array<Scenes_Bool_Exp>>;
  chat?: InputMaybe<Conversations_Bool_Exp>;
  chat_aggregate?: InputMaybe<Conversations_Aggregate_Bool_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  img_url?: InputMaybe<String_Comparison_Exp>;
  interaction_mode_id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  sort_order?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "scenes" */
export enum Scenes_Constraint {
  /** unique or primary key constraint on columns "id" */
  ScenesPkey = 'scenes_pkey'
}

/** input type for incrementing numeric columns in table "scenes" */
export type Scenes_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "scenes" */
export type Scenes_Insert_Input = {
  chat?: InputMaybe<Conversations_Arr_Rel_Insert_Input>;
  /** 场景内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  img_url?: InputMaybe<Scalars['String']['input']>;
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Scenes_Max_Fields = {
  __typename?: 'scenes_max_fields';
  /** 场景内容 */
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  img_url?: Maybe<Scalars['String']['output']>;
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Scenes_Min_Fields = {
  __typename?: 'scenes_min_fields';
  /** 场景内容 */
  content?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  img_url?: Maybe<Scalars['String']['output']>;
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  /** 名称 */
  name?: Maybe<Scalars['String']['output']>;
  sort_order?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "scenes" */
export type Scenes_Mutation_Response = {
  __typename?: 'scenes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scenes>;
};

/** on_conflict condition type for table "scenes" */
export type Scenes_On_Conflict = {
  constraint: Scenes_Constraint;
  update_columns?: Array<Scenes_Update_Column>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};

/** Ordering options when selecting data from "scenes". */
export type Scenes_Order_By = {
  chat_aggregate?: InputMaybe<Conversations_Aggregate_Order_By>;
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  img_url?: InputMaybe<Order_By>;
  interaction_mode_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  sort_order?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scenes */
export type Scenes_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "scenes" */
export enum Scenes_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'img_url',
  /** column name */
  InteractionModeId = 'interaction_mode_id',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "scenes" */
export type Scenes_Set_Input = {
  /** 场景内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  img_url?: InputMaybe<Scalars['String']['input']>;
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Scenes_Stddev_Fields = {
  __typename?: 'scenes_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Scenes_Stddev_Pop_Fields = {
  __typename?: 'scenes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Scenes_Stddev_Samp_Fields = {
  __typename?: 'scenes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scenes" */
export type Scenes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scenes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scenes_Stream_Cursor_Value_Input = {
  /** 场景内容 */
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  img_url?: InputMaybe<Scalars['String']['input']>;
  interaction_mode_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  sort_order?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Scenes_Sum_Fields = {
  __typename?: 'scenes_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  interaction_mode_id?: Maybe<Scalars['bigint']['output']>;
  sort_order?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "scenes" */
export enum Scenes_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImgUrl = 'img_url',
  /** column name */
  InteractionModeId = 'interaction_mode_id',
  /** column name */
  Name = 'name',
  /** column name */
  SortOrder = 'sort_order',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Scenes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scenes_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scenes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scenes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scenes_Var_Pop_Fields = {
  __typename?: 'scenes_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Scenes_Var_Samp_Fields = {
  __typename?: 'scenes_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Scenes_Variance_Fields = {
  __typename?: 'scenes_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  interaction_mode_id?: Maybe<Scalars['Float']['output']>;
  sort_order?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ad_watch_records" */
  ad_watch_records: Array<Ad_Watch_Records>;
  /** fetch aggregated fields from the table: "ad_watch_records" */
  ad_watch_records_aggregate: Ad_Watch_Records_Aggregate;
  /** fetch data from the table: "ad_watch_records" using primary key columns */
  ad_watch_records_by_pk?: Maybe<Ad_Watch_Records>;
  /** fetch data from the table in a streaming manner: "ad_watch_records" */
  ad_watch_records_stream: Array<Ad_Watch_Records>;
  /** fetch data from the table: "ai_friends" */
  ai_friends: Array<Ai_Friends>;
  /** fetch aggregated fields from the table: "ai_friends" */
  ai_friends_aggregate: Ai_Friends_Aggregate;
  /** fetch data from the table: "ai_friends" using primary key columns */
  ai_friends_by_pk?: Maybe<Ai_Friends>;
  /** fetch data from the table in a streaming manner: "ai_friends" */
  ai_friends_stream: Array<Ai_Friends>;
  /** fetch data from the table: "character_personalitys" */
  character_personalitys: Array<Character_Personalitys>;
  /** fetch aggregated fields from the table: "character_personalitys" */
  character_personalitys_aggregate: Character_Personalitys_Aggregate;
  /** fetch data from the table: "character_personalitys" using primary key columns */
  character_personalitys_by_pk?: Maybe<Character_Personalitys>;
  /** fetch data from the table in a streaming manner: "character_personalitys" */
  character_personalitys_stream: Array<Character_Personalitys>;
  /** fetch data from the table: "character_types" */
  character_types: Array<Character_Types>;
  /** fetch aggregated fields from the table: "character_types" */
  character_types_aggregate: Character_Types_Aggregate;
  /** fetch data from the table: "character_types" using primary key columns */
  character_types_by_pk?: Maybe<Character_Types>;
  /** fetch data from the table in a streaming manner: "character_types" */
  character_types_stream: Array<Character_Types>;
  /** fetch data from the table: "characters" */
  characters: Array<Characters>;
  /** fetch aggregated fields from the table: "characters" */
  characters_aggregate: Characters_Aggregate;
  /** fetch data from the table: "characters" using primary key columns */
  characters_by_pk?: Maybe<Characters>;
  /** fetch data from the table: "characters_ss" */
  characters_ss: Array<Characters_Ss>;
  /** fetch aggregated fields from the table: "characters_ss" */
  characters_ss_aggregate: Characters_Ss_Aggregate;
  /** fetch data from the table: "characters_ss" using primary key columns */
  characters_ss_by_pk?: Maybe<Characters_Ss>;
  /** fetch data from the table in a streaming manner: "characters_ss" */
  characters_ss_stream: Array<Characters_Ss>;
  /** fetch data from the table in a streaming manner: "characters" */
  characters_stream: Array<Characters>;
  /** fetch data from the table: "chat_messages" */
  chat_messages: Array<Chat_Messages>;
  /** fetch aggregated fields from the table: "chat_messages" */
  chat_messages_aggregate: Chat_Messages_Aggregate;
  /** fetch data from the table: "chat_messages" using primary key columns */
  chat_messages_by_pk?: Maybe<Chat_Messages>;
  /** fetch data from the table in a streaming manner: "chat_messages" */
  chat_messages_stream: Array<Chat_Messages>;
  /** fetch data from the table: "conversations" */
  conversations: Array<Conversations>;
  /** fetch aggregated fields from the table: "conversations" */
  conversations_aggregate: Conversations_Aggregate;
  /** fetch data from the table: "conversations" using primary key columns */
  conversations_by_pk?: Maybe<Conversations>;
  /** fetch data from the table in a streaming manner: "conversations" */
  conversations_stream: Array<Conversations>;
  /** fetch data from the table: "credit_got" */
  credit_got: Array<Credit_Got>;
  /** fetch aggregated fields from the table: "credit_got" */
  credit_got_aggregate: Credit_Got_Aggregate;
  /** fetch data from the table: "credit_got" using primary key columns */
  credit_got_by_pk?: Maybe<Credit_Got>;
  /** fetch data from the table in a streaming manner: "credit_got" */
  credit_got_stream: Array<Credit_Got>;
  /** fetch data from the table: "credit_used" */
  credit_used: Array<Credit_Used>;
  /** fetch aggregated fields from the table: "credit_used" */
  credit_used_aggregate: Credit_Used_Aggregate;
  /** fetch data from the table: "credit_used" using primary key columns */
  credit_used_by_pk?: Maybe<Credit_Used>;
  /** fetch data from the table in a streaming manner: "credit_used" */
  credit_used_stream: Array<Credit_Used>;
  /** fetch data from the table: "exploreAI" */
  exploreAI: Array<ExploreAi>;
  /** fetch aggregated fields from the table: "exploreAI" */
  exploreAI_aggregate: ExploreAi_Aggregate;
  /** fetch data from the table: "exploreAI" using primary key columns */
  exploreAI_by_pk?: Maybe<ExploreAi>;
  /** fetch data from the table in a streaming manner: "exploreAI" */
  exploreAI_stream: Array<ExploreAi>;
  /** fetch data from the table: "gen_tasks" */
  gen_tasks: Array<Gen_Tasks>;
  /** fetch aggregated fields from the table: "gen_tasks" */
  gen_tasks_aggregate: Gen_Tasks_Aggregate;
  /** fetch data from the table: "gen_tasks" using primary key columns */
  gen_tasks_by_pk?: Maybe<Gen_Tasks>;
  /** fetch data from the table in a streaming manner: "gen_tasks" */
  gen_tasks_stream: Array<Gen_Tasks>;
  /** fetch data from the table: "global_params" */
  global_params: Array<Global_Params>;
  /** fetch aggregated fields from the table: "global_params" */
  global_params_aggregate: Global_Params_Aggregate;
  /** fetch data from the table: "global_params" using primary key columns */
  global_params_by_pk?: Maybe<Global_Params>;
  /** fetch data from the table in a streaming manner: "global_params" */
  global_params_stream: Array<Global_Params>;
  /** fetch data from the table: "image_models" */
  image_models: Array<Image_Models>;
  /** fetch aggregated fields from the table: "image_models" */
  image_models_aggregate: Image_Models_Aggregate;
  /** fetch data from the table: "image_models" using primary key columns */
  image_models_by_pk?: Maybe<Image_Models>;
  /** fetch data from the table in a streaming manner: "image_models" */
  image_models_stream: Array<Image_Models>;
  /** fetch data from the table: "interaction_modes" */
  interaction_modes: Array<Interaction_Modes>;
  /** fetch aggregated fields from the table: "interaction_modes" */
  interaction_modes_aggregate: Interaction_Modes_Aggregate;
  /** fetch data from the table: "interaction_modes" using primary key columns */
  interaction_modes_by_pk?: Maybe<Interaction_Modes>;
  /** fetch data from the table in a streaming manner: "interaction_modes" */
  interaction_modes_stream: Array<Interaction_Modes>;
  /** fetch data from the table: "member_orders" */
  member_orders: Array<Member_Orders>;
  /** fetch aggregated fields from the table: "member_orders" */
  member_orders_aggregate: Member_Orders_Aggregate;
  /** fetch data from the table: "member_orders" using primary key columns */
  member_orders_by_pk?: Maybe<Member_Orders>;
  /** fetch data from the table in a streaming manner: "member_orders" */
  member_orders_stream: Array<Member_Orders>;
  /** fetch data from the table: "member_plans" */
  member_plans: Array<Member_Plans>;
  /** fetch aggregated fields from the table: "member_plans" */
  member_plans_aggregate: Member_Plans_Aggregate;
  /** fetch data from the table: "member_plans" using primary key columns */
  member_plans_by_pk?: Maybe<Member_Plans>;
  /** fetch data from the table in a streaming manner: "member_plans" */
  member_plans_stream: Array<Member_Plans>;
  /** fetch data from the table: "member_types" */
  member_types: Array<Member_Types>;
  /** fetch aggregated fields from the table: "member_types" */
  member_types_aggregate: Member_Types_Aggregate;
  /** fetch data from the table: "member_types" using primary key columns */
  member_types_by_pk?: Maybe<Member_Types>;
  /** fetch data from the table in a streaming manner: "member_types" */
  member_types_stream: Array<Member_Types>;
  /** fetch data from the table: "page_images" */
  page_images: Array<Page_Images>;
  /** fetch aggregated fields from the table: "page_images" */
  page_images_aggregate: Page_Images_Aggregate;
  /** fetch data from the table: "page_images" using primary key columns */
  page_images_by_pk?: Maybe<Page_Images>;
  /** fetch data from the table in a streaming manner: "page_images" */
  page_images_stream: Array<Page_Images>;
  /** fetch data from the table: "persons" */
  persons: Array<Persons>;
  /** fetch aggregated fields from the table: "persons" */
  persons_aggregate: Persons_Aggregate;
  /** fetch data from the table: "persons" using primary key columns */
  persons_by_pk?: Maybe<Persons>;
  /** fetch data from the table in a streaming manner: "persons" */
  persons_stream: Array<Persons>;
  /** fetch data from the table: "poses" */
  poses: Array<Poses>;
  /** fetch aggregated fields from the table: "poses" */
  poses_aggregate: Poses_Aggregate;
  /** fetch data from the table: "poses" using primary key columns */
  poses_by_pk?: Maybe<Poses>;
  /** fetch data from the table in a streaming manner: "poses" */
  poses_stream: Array<Poses>;
  /** fetch data from the table: "prompt_tag_types" */
  prompt_tag_types: Array<Prompt_Tag_Types>;
  /** fetch aggregated fields from the table: "prompt_tag_types" */
  prompt_tag_types_aggregate: Prompt_Tag_Types_Aggregate;
  /** fetch data from the table: "prompt_tag_types" using primary key columns */
  prompt_tag_types_by_pk?: Maybe<Prompt_Tag_Types>;
  /** fetch data from the table in a streaming manner: "prompt_tag_types" */
  prompt_tag_types_stream: Array<Prompt_Tag_Types>;
  /** fetch data from the table: "prompt_tags" */
  prompt_tags: Array<Prompt_Tags>;
  /** fetch aggregated fields from the table: "prompt_tags" */
  prompt_tags_aggregate: Prompt_Tags_Aggregate;
  /** fetch data from the table: "prompt_tags" using primary key columns */
  prompt_tags_by_pk?: Maybe<Prompt_Tags>;
  /** fetch data from the table in a streaming manner: "prompt_tags" */
  prompt_tags_stream: Array<Prompt_Tags>;
  /** fetch data from the table: "scenes" */
  scenes: Array<Scenes>;
  /** fetch aggregated fields from the table: "scenes" */
  scenes_aggregate: Scenes_Aggregate;
  /** fetch data from the table: "scenes" using primary key columns */
  scenes_by_pk?: Maybe<Scenes>;
  /** fetch data from the table in a streaming manner: "scenes" */
  scenes_stream: Array<Scenes>;
  /** fetch data from the table: "suits" */
  suits: Array<Suits>;
  /** fetch aggregated fields from the table: "suits" */
  suits_aggregate: Suits_Aggregate;
  /** fetch data from the table: "suits" using primary key columns */
  suits_by_pk?: Maybe<Suits>;
  /** fetch data from the table in a streaming manner: "suits" */
  suits_stream: Array<Suits>;
  /** fetch data from the table: "test.memo" */
  test_memo: Array<Test_Memo>;
  /** fetch aggregated fields from the table: "test.memo" */
  test_memo_aggregate: Test_Memo_Aggregate;
  /** fetch data from the table: "test.memo" using primary key columns */
  test_memo_by_pk?: Maybe<Test_Memo>;
  /** fetch data from the table in a streaming manner: "test.memo" */
  test_memo_stream: Array<Test_Memo>;
  /** fetch data from the table: "test.user" */
  test_user: Array<Test_User>;
  /** fetch aggregated fields from the table: "test.user" */
  test_user_aggregate: Test_User_Aggregate;
  /** fetch data from the table: "test.user" using primary key columns */
  test_user_by_pk?: Maybe<Test_User>;
  /** fetch data from the table in a streaming manner: "test.user" */
  test_user_stream: Array<Test_User>;
  /** fetch data from the table: "user_openid_mapping" */
  user_openid_mapping: Array<User_Openid_Mapping>;
  /** fetch aggregated fields from the table: "user_openid_mapping" */
  user_openid_mapping_aggregate: User_Openid_Mapping_Aggregate;
  /** fetch data from the table: "user_openid_mapping" using primary key columns */
  user_openid_mapping_by_pk?: Maybe<User_Openid_Mapping>;
  /** fetch data from the table in a streaming manner: "user_openid_mapping" */
  user_openid_mapping_stream: Array<User_Openid_Mapping>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootAd_Watch_RecordsArgs = {
  distinct_on?: InputMaybe<Array<Ad_Watch_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ad_Watch_Records_Order_By>>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};


export type Subscription_RootAd_Watch_Records_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ad_Watch_Records_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ad_Watch_Records_Order_By>>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};


export type Subscription_RootAd_Watch_Records_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootAd_Watch_Records_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ad_Watch_Records_Stream_Cursor_Input>>;
  where?: InputMaybe<Ad_Watch_Records_Bool_Exp>;
};


export type Subscription_RootAi_FriendsArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


export type Subscription_RootAi_Friends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


export type Subscription_RootAi_Friends_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootAi_Friends_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Ai_Friends_Stream_Cursor_Input>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


export type Subscription_RootCharacter_PersonalitysArgs = {
  distinct_on?: InputMaybe<Array<Character_Personalitys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Personalitys_Order_By>>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};


export type Subscription_RootCharacter_Personalitys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Character_Personalitys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Personalitys_Order_By>>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};


export type Subscription_RootCharacter_Personalitys_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCharacter_Personalitys_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Character_Personalitys_Stream_Cursor_Input>>;
  where?: InputMaybe<Character_Personalitys_Bool_Exp>;
};


export type Subscription_RootCharacter_TypesArgs = {
  distinct_on?: InputMaybe<Array<Character_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Types_Order_By>>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};


export type Subscription_RootCharacter_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Character_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Character_Types_Order_By>>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};


export type Subscription_RootCharacter_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCharacter_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Character_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Character_Types_Bool_Exp>;
};


export type Subscription_RootCharactersArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCharacters_SsArgs = {
  distinct_on?: InputMaybe<Array<Characters_Ss_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Ss_Order_By>>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};


export type Subscription_RootCharacters_Ss_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Ss_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Ss_Order_By>>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};


export type Subscription_RootCharacters_Ss_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCharacters_Ss_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Characters_Ss_Stream_Cursor_Input>>;
  where?: InputMaybe<Characters_Ss_Bool_Exp>;
};


export type Subscription_RootCharacters_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Characters_Stream_Cursor_Input>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


export type Subscription_RootChat_MessagesArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Chat_Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Chat_Messages_Order_By>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootChat_Messages_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootChat_Messages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Chat_Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Chat_Messages_Bool_Exp>;
};


export type Subscription_RootConversationsArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


export type Subscription_RootConversations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


export type Subscription_RootConversations_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootConversations_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Conversations_Stream_Cursor_Input>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


export type Subscription_RootCredit_GotArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


export type Subscription_RootCredit_Got_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


export type Subscription_RootCredit_Got_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCredit_Got_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Got_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


export type Subscription_RootCredit_UsedArgs = {
  distinct_on?: InputMaybe<Array<Credit_Used_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Used_Order_By>>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};


export type Subscription_RootCredit_Used_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Used_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Used_Order_By>>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};


export type Subscription_RootCredit_Used_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCredit_Used_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Credit_Used_Stream_Cursor_Input>>;
  where?: InputMaybe<Credit_Used_Bool_Exp>;
};


export type Subscription_RootExploreAiArgs = {
  distinct_on?: InputMaybe<Array<ExploreAi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExploreAi_Order_By>>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};


export type Subscription_RootExploreAi_AggregateArgs = {
  distinct_on?: InputMaybe<Array<ExploreAi_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExploreAi_Order_By>>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};


export type Subscription_RootExploreAi_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootExploreAi_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ExploreAi_Stream_Cursor_Input>>;
  where?: InputMaybe<ExploreAi_Bool_Exp>;
};


export type Subscription_RootGen_TasksArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


export type Subscription_RootGen_Tasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


export type Subscription_RootGen_Tasks_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGen_Tasks_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Gen_Tasks_Stream_Cursor_Input>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


export type Subscription_RootGlobal_ParamsArgs = {
  distinct_on?: InputMaybe<Array<Global_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Params_Order_By>>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};


export type Subscription_RootGlobal_Params_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Global_Params_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Global_Params_Order_By>>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};


export type Subscription_RootGlobal_Params_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootGlobal_Params_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Global_Params_Stream_Cursor_Input>>;
  where?: InputMaybe<Global_Params_Bool_Exp>;
};


export type Subscription_RootImage_ModelsArgs = {
  distinct_on?: InputMaybe<Array<Image_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Models_Order_By>>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};


export type Subscription_RootImage_Models_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Image_Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Image_Models_Order_By>>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};


export type Subscription_RootImage_Models_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootImage_Models_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Image_Models_Stream_Cursor_Input>>;
  where?: InputMaybe<Image_Models_Bool_Exp>;
};


export type Subscription_RootInteraction_ModesArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Modes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interaction_Modes_Order_By>>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};


export type Subscription_RootInteraction_Modes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Interaction_Modes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Interaction_Modes_Order_By>>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};


export type Subscription_RootInteraction_Modes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootInteraction_Modes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Interaction_Modes_Stream_Cursor_Input>>;
  where?: InputMaybe<Interaction_Modes_Bool_Exp>;
};


export type Subscription_RootMember_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


export type Subscription_RootMember_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


export type Subscription_RootMember_Orders_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMember_Orders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


export type Subscription_RootMember_PlansArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


export type Subscription_RootMember_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Plans_Order_By>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


export type Subscription_RootMember_Plans_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootMember_Plans_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Plans_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Plans_Bool_Exp>;
};


export type Subscription_RootMember_TypesArgs = {
  distinct_on?: InputMaybe<Array<Member_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Types_Order_By>>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};


export type Subscription_RootMember_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Types_Order_By>>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};


export type Subscription_RootMember_Types_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootMember_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Member_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Member_Types_Bool_Exp>;
};


export type Subscription_RootPage_ImagesArgs = {
  distinct_on?: InputMaybe<Array<Page_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Images_Order_By>>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};


export type Subscription_RootPage_Images_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Page_Images_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Page_Images_Order_By>>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};


export type Subscription_RootPage_Images_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPage_Images_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Page_Images_Stream_Cursor_Input>>;
  where?: InputMaybe<Page_Images_Bool_Exp>;
};


export type Subscription_RootPersonsArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Persons_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Persons_Order_By>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPersons_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPersons_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Persons_Stream_Cursor_Input>>;
  where?: InputMaybe<Persons_Bool_Exp>;
};


export type Subscription_RootPosesArgs = {
  distinct_on?: InputMaybe<Array<Poses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poses_Order_By>>;
  where?: InputMaybe<Poses_Bool_Exp>;
};


export type Subscription_RootPoses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Poses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Poses_Order_By>>;
  where?: InputMaybe<Poses_Bool_Exp>;
};


export type Subscription_RootPoses_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPoses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Poses_Stream_Cursor_Input>>;
  where?: InputMaybe<Poses_Bool_Exp>;
};


export type Subscription_RootPrompt_Tag_TypesArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tag_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tag_Types_Order_By>>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};


export type Subscription_RootPrompt_Tag_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tag_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tag_Types_Order_By>>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};


export type Subscription_RootPrompt_Tag_Types_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPrompt_Tag_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prompt_Tag_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompt_Tag_Types_Bool_Exp>;
};


export type Subscription_RootPrompt_TagsArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tags_Order_By>>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};


export type Subscription_RootPrompt_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Prompt_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Prompt_Tags_Order_By>>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};


export type Subscription_RootPrompt_Tags_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPrompt_Tags_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Prompt_Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Prompt_Tags_Bool_Exp>;
};


export type Subscription_RootScenesArgs = {
  distinct_on?: InputMaybe<Array<Scenes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scenes_Order_By>>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};


export type Subscription_RootScenes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scenes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scenes_Order_By>>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};


export type Subscription_RootScenes_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootScenes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scenes_Stream_Cursor_Input>>;
  where?: InputMaybe<Scenes_Bool_Exp>;
};


export type Subscription_RootSuitsArgs = {
  distinct_on?: InputMaybe<Array<Suits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suits_Order_By>>;
  where?: InputMaybe<Suits_Bool_Exp>;
};


export type Subscription_RootSuits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suits_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suits_Order_By>>;
  where?: InputMaybe<Suits_Bool_Exp>;
};


export type Subscription_RootSuits_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootSuits_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Suits_Stream_Cursor_Input>>;
  where?: InputMaybe<Suits_Bool_Exp>;
};


export type Subscription_RootTest_MemoArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


export type Subscription_RootTest_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


export type Subscription_RootTest_Memo_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTest_Memo_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Test_Memo_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


export type Subscription_RootTest_UserArgs = {
  distinct_on?: InputMaybe<Array<Test_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_User_Order_By>>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};


export type Subscription_RootTest_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_User_Order_By>>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};


export type Subscription_RootTest_User_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootTest_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Test_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};


export type Subscription_RootUser_Openid_MappingArgs = {
  distinct_on?: InputMaybe<Array<User_Openid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Openid_Mapping_Order_By>>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};


export type Subscription_RootUser_Openid_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Openid_Mapping_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Openid_Mapping_Order_By>>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};


export type Subscription_RootUser_Openid_Mapping_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUser_Openid_Mapping_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Openid_Mapping_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** 梦幻套装 */
export type Suits = {
  __typename?: 'suits';
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** 套装图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** 是否需要高清 */
  is_HD?: Maybe<Scalars['Boolean']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 套装名称 */
  name: Scalars['String']['output'];
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  suits___tasks?: Maybe<Gen_Tasks>;
  /** 更新时间 */
  updated_at: Scalars['timestamptz']['output'];
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "suits" */
export type Suits_Aggregate = {
  __typename?: 'suits_aggregate';
  aggregate?: Maybe<Suits_Aggregate_Fields>;
  nodes: Array<Suits>;
};

/** aggregate fields of "suits" */
export type Suits_Aggregate_Fields = {
  __typename?: 'suits_aggregate_fields';
  avg?: Maybe<Suits_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Suits_Max_Fields>;
  min?: Maybe<Suits_Min_Fields>;
  stddev?: Maybe<Suits_Stddev_Fields>;
  stddev_pop?: Maybe<Suits_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suits_Stddev_Samp_Fields>;
  sum?: Maybe<Suits_Sum_Fields>;
  var_pop?: Maybe<Suits_Var_Pop_Fields>;
  var_samp?: Maybe<Suits_Var_Samp_Fields>;
  variance?: Maybe<Suits_Variance_Fields>;
};


/** aggregate fields of "suits" */
export type Suits_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suits_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Suits_Avg_Fields = {
  __typename?: 'suits_avg_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "suits". All fields are combined with a logical 'AND'. */
export type Suits_Bool_Exp = {
  _and?: InputMaybe<Array<Suits_Bool_Exp>>;
  _not?: InputMaybe<Suits_Bool_Exp>;
  _or?: InputMaybe<Array<Suits_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  credit_cost?: InputMaybe<Bigint_Comparison_Exp>;
  disp_level?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  is_HD?: InputMaybe<Boolean_Comparison_Exp>;
  lora?: InputMaybe<String_Comparison_Exp>;
  lora_weight?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  negative_prompt?: InputMaybe<String_Comparison_Exp>;
  positive_prompt?: InputMaybe<String_Comparison_Exp>;
  sort?: InputMaybe<Bigint_Comparison_Exp>;
  suits___tasks?: InputMaybe<Gen_Tasks_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  use_level?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "suits" */
export enum Suits_Constraint {
  /** unique or primary key constraint on columns "id" */
  DreamSuitsPkey = 'dream_suits_pkey'
}

/** input type for incrementing numeric columns in table "suits" */
export type Suits_Inc_Input = {
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "suits" */
export type Suits_Insert_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套装图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否需要高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 套装名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  suits___tasks?: InputMaybe<Gen_Tasks_Obj_Rel_Insert_Input>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Suits_Max_Fields = {
  __typename?: 'suits_max_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 套装图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 套装名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type Suits_Min_Fields = {
  __typename?: 'suits_min_fields';
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 套装图片URL */
  image_url?: Maybe<Scalars['String']['output']>;
  /** Lora配置 */
  lora?: Maybe<Scalars['String']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 套装名称 */
  name?: Maybe<Scalars['String']['output']>;
  /** 反向提示词 */
  negative_prompt?: Maybe<Scalars['String']['output']>;
  /** 正向提示词 */
  positive_prompt?: Maybe<Scalars['String']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  /** 更新时间 */
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "suits" */
export type Suits_Mutation_Response = {
  __typename?: 'suits_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Suits>;
};

/** on_conflict condition type for table "suits" */
export type Suits_On_Conflict = {
  constraint: Suits_Constraint;
  update_columns?: Array<Suits_Update_Column>;
  where?: InputMaybe<Suits_Bool_Exp>;
};

/** Ordering options when selecting data from "suits". */
export type Suits_Order_By = {
  created_at?: InputMaybe<Order_By>;
  credit_cost?: InputMaybe<Order_By>;
  disp_level?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  is_HD?: InputMaybe<Order_By>;
  lora?: InputMaybe<Order_By>;
  lora_weight?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  negative_prompt?: InputMaybe<Order_By>;
  positive_prompt?: InputMaybe<Order_By>;
  sort?: InputMaybe<Order_By>;
  suits___tasks?: InputMaybe<Gen_Tasks_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  use_level?: InputMaybe<Order_By>;
};

/** primary key columns input for table: suits */
export type Suits_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "suits" */
export enum Suits_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

/** input type for updating data in table "suits" */
export type Suits_Set_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套装图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否需要高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 套装名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Suits_Stddev_Fields = {
  __typename?: 'suits_stddev_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Suits_Stddev_Pop_Fields = {
  __typename?: 'suits_stddev_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Suits_Stddev_Samp_Fields = {
  __typename?: 'suits_stddev_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "suits" */
export type Suits_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suits_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suits_Stream_Cursor_Value_Input = {
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 消耗积分数 */
  credit_cost?: InputMaybe<Scalars['bigint']['input']>;
  disp_level?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 套装图片URL */
  image_url?: InputMaybe<Scalars['String']['input']>;
  /** 是否需要高清 */
  is_HD?: InputMaybe<Scalars['Boolean']['input']>;
  /** Lora配置 */
  lora?: InputMaybe<Scalars['String']['input']>;
  /** lora模型权重 */
  lora_weight?: InputMaybe<Scalars['float8']['input']>;
  /** 套装名称 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 反向提示词 */
  negative_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 正向提示词 */
  positive_prompt?: InputMaybe<Scalars['String']['input']>;
  /** 排序 */
  sort?: InputMaybe<Scalars['bigint']['input']>;
  /** 更新时间 */
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  use_level?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Suits_Sum_Fields = {
  __typename?: 'suits_sum_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['bigint']['output']>;
  disp_level?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['float8']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['bigint']['output']>;
  use_level?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "suits" */
export enum Suits_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreditCost = 'credit_cost',
  /** column name */
  DispLevel = 'disp_level',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  IsHd = 'is_HD',
  /** column name */
  Lora = 'lora',
  /** column name */
  LoraWeight = 'lora_weight',
  /** column name */
  Name = 'name',
  /** column name */
  NegativePrompt = 'negative_prompt',
  /** column name */
  PositivePrompt = 'positive_prompt',
  /** column name */
  Sort = 'sort',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UseLevel = 'use_level'
}

export type Suits_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Suits_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suits_Set_Input>;
  /** filter the rows which have to be updated */
  where: Suits_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Suits_Var_Pop_Fields = {
  __typename?: 'suits_var_pop_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Suits_Var_Samp_Fields = {
  __typename?: 'suits_var_samp_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Suits_Variance_Fields = {
  __typename?: 'suits_variance_fields';
  /** 消耗积分数 */
  credit_cost?: Maybe<Scalars['Float']['output']>;
  disp_level?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** lora模型权重 */
  lora_weight?: Maybe<Scalars['Float']['output']>;
  /** 排序 */
  sort?: Maybe<Scalars['Float']['output']>;
  use_level?: Maybe<Scalars['Float']['output']>;
};

/** 备忘录 */
export type Test_Memo = {
  __typename?: 'test_memo';
  content: Scalars['String']['output'];
  id: Scalars['bigint']['output'];
  title: Scalars['String']['output'];
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregated selection of "test.memo" */
export type Test_Memo_Aggregate = {
  __typename?: 'test_memo_aggregate';
  aggregate?: Maybe<Test_Memo_Aggregate_Fields>;
  nodes: Array<Test_Memo>;
};

export type Test_Memo_Aggregate_Bool_Exp = {
  count?: InputMaybe<Test_Memo_Aggregate_Bool_Exp_Count>;
};

export type Test_Memo_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Test_Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Test_Memo_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "test.memo" */
export type Test_Memo_Aggregate_Fields = {
  __typename?: 'test_memo_aggregate_fields';
  avg?: Maybe<Test_Memo_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Test_Memo_Max_Fields>;
  min?: Maybe<Test_Memo_Min_Fields>;
  stddev?: Maybe<Test_Memo_Stddev_Fields>;
  stddev_pop?: Maybe<Test_Memo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_Memo_Stddev_Samp_Fields>;
  sum?: Maybe<Test_Memo_Sum_Fields>;
  var_pop?: Maybe<Test_Memo_Var_Pop_Fields>;
  var_samp?: Maybe<Test_Memo_Var_Samp_Fields>;
  variance?: Maybe<Test_Memo_Variance_Fields>;
};


/** aggregate fields of "test.memo" */
export type Test_Memo_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Memo_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "test.memo" */
export type Test_Memo_Aggregate_Order_By = {
  avg?: InputMaybe<Test_Memo_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Test_Memo_Max_Order_By>;
  min?: InputMaybe<Test_Memo_Min_Order_By>;
  stddev?: InputMaybe<Test_Memo_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Test_Memo_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Test_Memo_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Test_Memo_Sum_Order_By>;
  var_pop?: InputMaybe<Test_Memo_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Test_Memo_Var_Samp_Order_By>;
  variance?: InputMaybe<Test_Memo_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "test.memo" */
export type Test_Memo_Arr_Rel_Insert_Input = {
  data: Array<Test_Memo_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Test_Memo_On_Conflict>;
};

/** aggregate avg on columns */
export type Test_Memo_Avg_Fields = {
  __typename?: 'test_memo_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "test.memo" */
export type Test_Memo_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "test.memo". All fields are combined with a logical 'AND'. */
export type Test_Memo_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Memo_Bool_Exp>>;
  _not?: InputMaybe<Test_Memo_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Memo_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.memo" */
export enum Test_Memo_Constraint {
  /** unique or primary key constraint on columns "id" */
  MemoPkey = 'memo_pkey'
}

/** input type for incrementing numeric columns in table "test.memo" */
export type Test_Memo_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "test.memo" */
export type Test_Memo_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Test_Memo_Max_Fields = {
  __typename?: 'test_memo_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "test.memo" */
export type Test_Memo_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Test_Memo_Min_Fields = {
  __typename?: 'test_memo_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "test.memo" */
export type Test_Memo_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test.memo" */
export type Test_Memo_Mutation_Response = {
  __typename?: 'test_memo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Memo>;
};

/** on_conflict condition type for table "test.memo" */
export type Test_Memo_On_Conflict = {
  constraint: Test_Memo_Constraint;
  update_columns?: Array<Test_Memo_Update_Column>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};

/** Ordering options when selecting data from "test.memo". */
export type Test_Memo_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test.memo */
export type Test_Memo_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "test.memo" */
export enum Test_Memo_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "test.memo" */
export type Test_Memo_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Test_Memo_Stddev_Fields = {
  __typename?: 'test_memo_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "test.memo" */
export type Test_Memo_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Test_Memo_Stddev_Pop_Fields = {
  __typename?: 'test_memo_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "test.memo" */
export type Test_Memo_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Test_Memo_Stddev_Samp_Fields = {
  __typename?: 'test_memo_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "test.memo" */
export type Test_Memo_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "test_memo" */
export type Test_Memo_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_Memo_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_Memo_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Test_Memo_Sum_Fields = {
  __typename?: 'test_memo_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "test.memo" */
export type Test_Memo_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "test.memo" */
export enum Test_Memo_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

export type Test_Memo_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Test_Memo_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_Memo_Set_Input>;
  /** filter the rows which have to be updated */
  where: Test_Memo_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Test_Memo_Var_Pop_Fields = {
  __typename?: 'test_memo_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "test.memo" */
export type Test_Memo_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Test_Memo_Var_Samp_Fields = {
  __typename?: 'test_memo_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "test.memo" */
export type Test_Memo_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Test_Memo_Variance_Fields = {
  __typename?: 'test_memo_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "test.memo" */
export type Test_Memo_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** 用户表 */
export type Test_User = {
  __typename?: 'test_user';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['bigint']['output'];
  password?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_memo: Array<Test_Memo>;
  /** An aggregate relationship */
  user_memo_aggregate: Test_Memo_Aggregate;
  user_name: Scalars['String']['output'];
};


/** 用户表 */
export type Test_UserUser_MemoArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};


/** 用户表 */
export type Test_UserUser_Memo_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Memo_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Memo_Order_By>>;
  where?: InputMaybe<Test_Memo_Bool_Exp>;
};

/** aggregated selection of "test.user" */
export type Test_User_Aggregate = {
  __typename?: 'test_user_aggregate';
  aggregate?: Maybe<Test_User_Aggregate_Fields>;
  nodes: Array<Test_User>;
};

/** aggregate fields of "test.user" */
export type Test_User_Aggregate_Fields = {
  __typename?: 'test_user_aggregate_fields';
  avg?: Maybe<Test_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Test_User_Max_Fields>;
  min?: Maybe<Test_User_Min_Fields>;
  stddev?: Maybe<Test_User_Stddev_Fields>;
  stddev_pop?: Maybe<Test_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Test_User_Stddev_Samp_Fields>;
  sum?: Maybe<Test_User_Sum_Fields>;
  var_pop?: Maybe<Test_User_Var_Pop_Fields>;
  var_samp?: Maybe<Test_User_Var_Samp_Fields>;
  variance?: Maybe<Test_User_Variance_Fields>;
};


/** aggregate fields of "test.user" */
export type Test_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Test_User_Avg_Fields = {
  __typename?: 'test_user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "test.user". All fields are combined with a logical 'AND'. */
export type Test_User_Bool_Exp = {
  _and?: InputMaybe<Array<Test_User_Bool_Exp>>;
  _not?: InputMaybe<Test_User_Bool_Exp>;
  _or?: InputMaybe<Array<Test_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_memo?: InputMaybe<Test_Memo_Bool_Exp>;
  user_memo_aggregate?: InputMaybe<Test_Memo_Aggregate_Bool_Exp>;
  user_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "test.user" */
export enum Test_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "test.user" */
export type Test_User_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "test.user" */
export type Test_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_memo?: InputMaybe<Test_Memo_Arr_Rel_Insert_Input>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Test_User_Max_Fields = {
  __typename?: 'test_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Test_User_Min_Fields = {
  __typename?: 'test_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "test.user" */
export type Test_User_Mutation_Response = {
  __typename?: 'test_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_User>;
};

/** on_conflict condition type for table "test.user" */
export type Test_User_On_Conflict = {
  constraint: Test_User_Constraint;
  update_columns?: Array<Test_User_Update_Column>;
  where?: InputMaybe<Test_User_Bool_Exp>;
};

/** Ordering options when selecting data from "test.user". */
export type Test_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_memo_aggregate?: InputMaybe<Test_Memo_Aggregate_Order_By>;
  user_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test.user */
export type Test_User_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "test.user" */
export enum Test_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserName = 'user_name'
}

/** input type for updating data in table "test.user" */
export type Test_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Test_User_Stddev_Fields = {
  __typename?: 'test_user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Test_User_Stddev_Pop_Fields = {
  __typename?: 'test_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Test_User_Stddev_Samp_Fields = {
  __typename?: 'test_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "test_user" */
export type Test_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_User_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Test_User_Sum_Fields = {
  __typename?: 'test_user_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "test.user" */
export enum Test_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserName = 'user_name'
}

export type Test_User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Test_User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Test_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Test_User_Var_Pop_Fields = {
  __typename?: 'test_user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Test_User_Var_Samp_Fields = {
  __typename?: 'test_user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Test_User_Variance_Fields = {
  __typename?: 'test_user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_openid_mapping" */
export type User_Openid_Mapping = {
  __typename?: 'user_openid_mapping';
  app_id: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  openid: Scalars['String']['output'];
  platform: Scalars['String']['output'];
  unionid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_openid_mapping" */
export type User_Openid_Mapping_Aggregate = {
  __typename?: 'user_openid_mapping_aggregate';
  aggregate?: Maybe<User_Openid_Mapping_Aggregate_Fields>;
  nodes: Array<User_Openid_Mapping>;
};

/** aggregate fields of "user_openid_mapping" */
export type User_Openid_Mapping_Aggregate_Fields = {
  __typename?: 'user_openid_mapping_aggregate_fields';
  avg?: Maybe<User_Openid_Mapping_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Openid_Mapping_Max_Fields>;
  min?: Maybe<User_Openid_Mapping_Min_Fields>;
  stddev?: Maybe<User_Openid_Mapping_Stddev_Fields>;
  stddev_pop?: Maybe<User_Openid_Mapping_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Openid_Mapping_Stddev_Samp_Fields>;
  sum?: Maybe<User_Openid_Mapping_Sum_Fields>;
  var_pop?: Maybe<User_Openid_Mapping_Var_Pop_Fields>;
  var_samp?: Maybe<User_Openid_Mapping_Var_Samp_Fields>;
  variance?: Maybe<User_Openid_Mapping_Variance_Fields>;
};


/** aggregate fields of "user_openid_mapping" */
export type User_Openid_Mapping_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Openid_Mapping_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Openid_Mapping_Avg_Fields = {
  __typename?: 'user_openid_mapping_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_openid_mapping". All fields are combined with a logical 'AND'. */
export type User_Openid_Mapping_Bool_Exp = {
  _and?: InputMaybe<Array<User_Openid_Mapping_Bool_Exp>>;
  _not?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
  _or?: InputMaybe<Array<User_Openid_Mapping_Bool_Exp>>;
  app_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  openid?: InputMaybe<String_Comparison_Exp>;
  platform?: InputMaybe<String_Comparison_Exp>;
  unionid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_openid_mapping" */
export enum User_Openid_Mapping_Constraint {
  /** unique or primary key constraint on columns "app_id", "openid" */
  UniqueOpenidApp = 'unique_openid_app',
  /** unique or primary key constraint on columns "id" */
  UserOpenidMappingPkey = 'user_openid_mapping_pkey'
}

/** input type for incrementing numeric columns in table "user_openid_mapping" */
export type User_Openid_Mapping_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_openid_mapping" */
export type User_Openid_Mapping_Insert_Input = {
  app_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  openid?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  unionid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Openid_Mapping_Max_Fields = {
  __typename?: 'user_openid_mapping_max_fields';
  app_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  openid?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  unionid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type User_Openid_Mapping_Min_Fields = {
  __typename?: 'user_openid_mapping_min_fields';
  app_id?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  openid?: Maybe<Scalars['String']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  unionid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "user_openid_mapping" */
export type User_Openid_Mapping_Mutation_Response = {
  __typename?: 'user_openid_mapping_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Openid_Mapping>;
};

/** on_conflict condition type for table "user_openid_mapping" */
export type User_Openid_Mapping_On_Conflict = {
  constraint: User_Openid_Mapping_Constraint;
  update_columns?: Array<User_Openid_Mapping_Update_Column>;
  where?: InputMaybe<User_Openid_Mapping_Bool_Exp>;
};

/** Ordering options when selecting data from "user_openid_mapping". */
export type User_Openid_Mapping_Order_By = {
  app_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  openid?: InputMaybe<Order_By>;
  platform?: InputMaybe<Order_By>;
  unionid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_openid_mapping */
export type User_Openid_Mapping_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_openid_mapping" */
export enum User_Openid_Mapping_Select_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Openid = 'openid',
  /** column name */
  Platform = 'platform',
  /** column name */
  Unionid = 'unionid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_openid_mapping" */
export type User_Openid_Mapping_Set_Input = {
  app_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  openid?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  unionid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Openid_Mapping_Stddev_Fields = {
  __typename?: 'user_openid_mapping_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Openid_Mapping_Stddev_Pop_Fields = {
  __typename?: 'user_openid_mapping_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Openid_Mapping_Stddev_Samp_Fields = {
  __typename?: 'user_openid_mapping_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_openid_mapping" */
export type User_Openid_Mapping_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Openid_Mapping_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Openid_Mapping_Stream_Cursor_Value_Input = {
  app_id?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  openid?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  unionid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Openid_Mapping_Sum_Fields = {
  __typename?: 'user_openid_mapping_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "user_openid_mapping" */
export enum User_Openid_Mapping_Update_Column {
  /** column name */
  AppId = 'app_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Openid = 'openid',
  /** column name */
  Platform = 'platform',
  /** column name */
  Unionid = 'unionid',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Openid_Mapping_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Openid_Mapping_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Openid_Mapping_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Openid_Mapping_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Openid_Mapping_Var_Pop_Fields = {
  __typename?: 'user_openid_mapping_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Openid_Mapping_Var_Samp_Fields = {
  __typename?: 'user_openid_mapping_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Openid_Mapping_Variance_Fields = {
  __typename?: 'user_openid_mapping_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** 用户表 */
export type Users = {
  __typename?: 'users';
  /** 头像链接 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** 个人简介 */
  bio?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  character: Array<Characters>;
  /** An aggregate relationship */
  character_aggregate: Characters_Aggregate;
  /** 创建时间 */
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  draft: Array<Gen_Tasks>;
  /** An aggregate relationship */
  draft_aggregate: Gen_Tasks_Aggregate;
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  /** An array relationship */
  member_order: Array<Member_Orders>;
  /** An aggregate relationship */
  member_order_aggregate: Member_Orders_Aggregate;
  /** 用户的会员类型 */
  member_type_id: Scalars['bigint']['output'];
  /** 手机号 */
  mobile?: Maybe<Scalars['String']['output']>;
  /** 昵称 */
  nickname: Scalars['String']['output'];
  /** An object relationship */
  point_consumption?: Maybe<Credit_Used>;
  /** An array relationship */
  points_record: Array<Credit_Got>;
  /** An aggregate relationship */
  points_record_aggregate: Credit_Got_Aggregate;
  /** 隐私密码 */
  privacy_password?: Maybe<Scalars['String']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user___friends: Array<Ai_Friends>;
  /** An aggregate relationship */
  user___friends_aggregate: Ai_Friends_Aggregate;
  user_ai_friends?: Maybe<Scalars['bigint']['output']>;
  user_characters?: Maybe<Scalars['bigint']['output']>;
  user_chats?: Maybe<Scalars['bigint']['output']>;
  user_drafts?: Maybe<Scalars['bigint']['output']>;
  user_member_orders?: Maybe<Scalars['bigint']['output']>;
  user_point_consumptions?: Maybe<Scalars['bigint']['output']>;
  user_points_record?: Maybe<Scalars['bigint']['output']>;
  /** An array relationship */
  users___conversation: Array<Conversations>;
  /** An aggregate relationship */
  users___conversation_aggregate: Conversations_Aggregate;
};


/** 用户表 */
export type UsersCharacterArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


/** 用户表 */
export type UsersCharacter_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Characters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Characters_Order_By>>;
  where?: InputMaybe<Characters_Bool_Exp>;
};


/** 用户表 */
export type UsersDraftArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


/** 用户表 */
export type UsersDraft_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Gen_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Gen_Tasks_Order_By>>;
  where?: InputMaybe<Gen_Tasks_Bool_Exp>;
};


/** 用户表 */
export type UsersMember_OrderArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


/** 用户表 */
export type UsersMember_Order_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Member_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Member_Orders_Order_By>>;
  where?: InputMaybe<Member_Orders_Bool_Exp>;
};


/** 用户表 */
export type UsersPoints_RecordArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


/** 用户表 */
export type UsersPoints_Record_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Credit_Got_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Credit_Got_Order_By>>;
  where?: InputMaybe<Credit_Got_Bool_Exp>;
};


/** 用户表 */
export type UsersUser___FriendsArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


/** 用户表 */
export type UsersUser___Friends_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ai_Friends_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Ai_Friends_Order_By>>;
  where?: InputMaybe<Ai_Friends_Bool_Exp>;
};


/** 用户表 */
export type UsersUsers___ConversationArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};


/** 用户表 */
export type UsersUsers___Conversation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Conversations_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Conversations_Order_By>>;
  where?: InputMaybe<Conversations_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
  stddev?: InputMaybe<Users_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  bio?: InputMaybe<String_Comparison_Exp>;
  character?: InputMaybe<Characters_Bool_Exp>;
  character_aggregate?: InputMaybe<Characters_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  draft?: InputMaybe<Gen_Tasks_Bool_Exp>;
  draft_aggregate?: InputMaybe<Gen_Tasks_Aggregate_Bool_Exp>;
  gold_credit?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  member_order?: InputMaybe<Member_Orders_Bool_Exp>;
  member_order_aggregate?: InputMaybe<Member_Orders_Aggregate_Bool_Exp>;
  member_type_id?: InputMaybe<Bigint_Comparison_Exp>;
  mobile?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  point_consumption?: InputMaybe<Credit_Used_Bool_Exp>;
  points_record?: InputMaybe<Credit_Got_Bool_Exp>;
  points_record_aggregate?: InputMaybe<Credit_Got_Aggregate_Bool_Exp>;
  privacy_password?: InputMaybe<String_Comparison_Exp>;
  silver_credit?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user___friends?: InputMaybe<Ai_Friends_Bool_Exp>;
  user___friends_aggregate?: InputMaybe<Ai_Friends_Aggregate_Bool_Exp>;
  user_ai_friends?: InputMaybe<Bigint_Comparison_Exp>;
  user_characters?: InputMaybe<Bigint_Comparison_Exp>;
  user_chats?: InputMaybe<Bigint_Comparison_Exp>;
  user_drafts?: InputMaybe<Bigint_Comparison_Exp>;
  user_member_orders?: InputMaybe<Bigint_Comparison_Exp>;
  user_point_consumptions?: InputMaybe<Bigint_Comparison_Exp>;
  user_points_record?: InputMaybe<Bigint_Comparison_Exp>;
  users___conversation?: InputMaybe<Conversations_Bool_Exp>;
  users___conversation_aggregate?: InputMaybe<Conversations_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  user_ai_friends?: InputMaybe<Scalars['bigint']['input']>;
  user_characters?: InputMaybe<Scalars['bigint']['input']>;
  user_chats?: InputMaybe<Scalars['bigint']['input']>;
  user_drafts?: InputMaybe<Scalars['bigint']['input']>;
  user_member_orders?: InputMaybe<Scalars['bigint']['input']>;
  user_point_consumptions?: InputMaybe<Scalars['bigint']['input']>;
  user_points_record?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  /** 头像链接 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  /** 个人简介 */
  bio?: InputMaybe<Scalars['String']['input']>;
  character?: InputMaybe<Characters_Arr_Rel_Insert_Input>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  draft?: InputMaybe<Gen_Tasks_Arr_Rel_Insert_Input>;
  /** 金积分余额 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  member_order?: InputMaybe<Member_Orders_Arr_Rel_Insert_Input>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 手机号 */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  point_consumption?: InputMaybe<Credit_Used_Obj_Rel_Insert_Input>;
  points_record?: InputMaybe<Credit_Got_Arr_Rel_Insert_Input>;
  /** 隐私密码 */
  privacy_password?: InputMaybe<Scalars['String']['input']>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user___friends?: InputMaybe<Ai_Friends_Arr_Rel_Insert_Input>;
  user_ai_friends?: InputMaybe<Scalars['bigint']['input']>;
  user_characters?: InputMaybe<Scalars['bigint']['input']>;
  user_chats?: InputMaybe<Scalars['bigint']['input']>;
  user_drafts?: InputMaybe<Scalars['bigint']['input']>;
  user_member_orders?: InputMaybe<Scalars['bigint']['input']>;
  user_point_consumptions?: InputMaybe<Scalars['bigint']['input']>;
  user_points_record?: InputMaybe<Scalars['bigint']['input']>;
  users___conversation?: InputMaybe<Conversations_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  /** 头像链接 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** 个人简介 */
  bio?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 手机号 */
  mobile?: Maybe<Scalars['String']['output']>;
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 隐私密码 */
  privacy_password?: Maybe<Scalars['String']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_ai_friends?: Maybe<Scalars['bigint']['output']>;
  user_characters?: Maybe<Scalars['bigint']['output']>;
  user_chats?: Maybe<Scalars['bigint']['output']>;
  user_drafts?: Maybe<Scalars['bigint']['output']>;
  user_member_orders?: Maybe<Scalars['bigint']['output']>;
  user_point_consumptions?: Maybe<Scalars['bigint']['output']>;
  user_points_record?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  /** 头像链接 */
  avatar_url?: InputMaybe<Order_By>;
  /** 个人简介 */
  bio?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 手机号 */
  mobile?: InputMaybe<Order_By>;
  /** 昵称 */
  nickname?: InputMaybe<Order_By>;
  /** 隐私密码 */
  privacy_password?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  /** 头像链接 */
  avatar_url?: Maybe<Scalars['String']['output']>;
  /** 个人简介 */
  bio?: Maybe<Scalars['String']['output']>;
  /** 创建时间 */
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 手机号 */
  mobile?: Maybe<Scalars['String']['output']>;
  /** 昵称 */
  nickname?: Maybe<Scalars['String']['output']>;
  /** 隐私密码 */
  privacy_password?: Maybe<Scalars['String']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_ai_friends?: Maybe<Scalars['bigint']['output']>;
  user_characters?: Maybe<Scalars['bigint']['output']>;
  user_chats?: Maybe<Scalars['bigint']['output']>;
  user_drafts?: Maybe<Scalars['bigint']['output']>;
  user_member_orders?: Maybe<Scalars['bigint']['output']>;
  user_point_consumptions?: Maybe<Scalars['bigint']['output']>;
  user_points_record?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  /** 头像链接 */
  avatar_url?: InputMaybe<Order_By>;
  /** 个人简介 */
  bio?: InputMaybe<Order_By>;
  /** 创建时间 */
  created_at?: InputMaybe<Order_By>;
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 手机号 */
  mobile?: InputMaybe<Order_By>;
  /** 昵称 */
  nickname?: InputMaybe<Order_By>;
  /** 隐私密码 */
  privacy_password?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: InputMaybe<Order_By>;
  bio?: InputMaybe<Order_By>;
  character_aggregate?: InputMaybe<Characters_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  draft_aggregate?: InputMaybe<Gen_Tasks_Aggregate_Order_By>;
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  member_order_aggregate?: InputMaybe<Member_Orders_Aggregate_Order_By>;
  member_type_id?: InputMaybe<Order_By>;
  mobile?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  point_consumption?: InputMaybe<Credit_Used_Order_By>;
  points_record_aggregate?: InputMaybe<Credit_Got_Aggregate_Order_By>;
  privacy_password?: InputMaybe<Order_By>;
  silver_credit?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user___friends_aggregate?: InputMaybe<Ai_Friends_Aggregate_Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
  users___conversation_aggregate?: InputMaybe<Conversations_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoldCredit = 'gold_credit',
  /** column name */
  Id = 'id',
  /** column name */
  MemberTypeId = 'member_type_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PrivacyPassword = 'privacy_password',
  /** column name */
  SilverCredit = 'silver_credit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAiFriends = 'user_ai_friends',
  /** column name */
  UserCharacters = 'user_characters',
  /** column name */
  UserChats = 'user_chats',
  /** column name */
  UserDrafts = 'user_drafts',
  /** column name */
  UserMemberOrders = 'user_member_orders',
  /** column name */
  UserPointConsumptions = 'user_point_consumptions',
  /** column name */
  UserPointsRecord = 'user_points_record'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  /** 头像链接 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  /** 个人简介 */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 金积分余额 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 手机号 */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** 隐私密码 */
  privacy_password?: InputMaybe<Scalars['String']['input']>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_ai_friends?: InputMaybe<Scalars['bigint']['input']>;
  user_characters?: InputMaybe<Scalars['bigint']['input']>;
  user_chats?: InputMaybe<Scalars['bigint']['input']>;
  user_drafts?: InputMaybe<Scalars['bigint']['input']>;
  user_member_orders?: InputMaybe<Scalars['bigint']['input']>;
  user_point_consumptions?: InputMaybe<Scalars['bigint']['input']>;
  user_points_record?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  /** 头像链接 */
  avatar_url?: InputMaybe<Scalars['String']['input']>;
  /** 个人简介 */
  bio?: InputMaybe<Scalars['String']['input']>;
  /** 创建时间 */
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  /** 金积分余额 */
  gold_credit?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Scalars['bigint']['input']>;
  /** 手机号 */
  mobile?: InputMaybe<Scalars['String']['input']>;
  /** 昵称 */
  nickname?: InputMaybe<Scalars['String']['input']>;
  /** 隐私密码 */
  privacy_password?: InputMaybe<Scalars['String']['input']>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_ai_friends?: InputMaybe<Scalars['bigint']['input']>;
  user_characters?: InputMaybe<Scalars['bigint']['input']>;
  user_chats?: InputMaybe<Scalars['bigint']['input']>;
  user_drafts?: InputMaybe<Scalars['bigint']['input']>;
  user_member_orders?: InputMaybe<Scalars['bigint']['input']>;
  user_point_consumptions?: InputMaybe<Scalars['bigint']['input']>;
  user_points_record?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['bigint']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['bigint']['output']>;
  user_ai_friends?: Maybe<Scalars['bigint']['output']>;
  user_characters?: Maybe<Scalars['bigint']['output']>;
  user_chats?: Maybe<Scalars['bigint']['output']>;
  user_drafts?: Maybe<Scalars['bigint']['output']>;
  user_member_orders?: Maybe<Scalars['bigint']['output']>;
  user_point_consumptions?: Maybe<Scalars['bigint']['output']>;
  user_points_record?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  GoldCredit = 'gold_credit',
  /** column name */
  Id = 'id',
  /** column name */
  MemberTypeId = 'member_type_id',
  /** column name */
  Mobile = 'mobile',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  PrivacyPassword = 'privacy_password',
  /** column name */
  SilverCredit = 'silver_credit',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserAiFriends = 'user_ai_friends',
  /** column name */
  UserCharacters = 'user_characters',
  /** column name */
  UserChats = 'user_chats',
  /** column name */
  UserDrafts = 'user_drafts',
  /** column name */
  UserMemberOrders = 'user_member_orders',
  /** column name */
  UserPointConsumptions = 'user_point_consumptions',
  /** column name */
  UserPointsRecord = 'user_points_record'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  /** 金积分余额 */
  gold_credit?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** 用户的会员类型 */
  member_type_id?: Maybe<Scalars['Float']['output']>;
  /** 银积分余额 */
  silver_credit?: Maybe<Scalars['Float']['output']>;
  user_ai_friends?: Maybe<Scalars['Float']['output']>;
  user_characters?: Maybe<Scalars['Float']['output']>;
  user_chats?: Maybe<Scalars['Float']['output']>;
  user_drafts?: Maybe<Scalars['Float']['output']>;
  user_member_orders?: Maybe<Scalars['Float']['output']>;
  user_point_consumptions?: Maybe<Scalars['Float']['output']>;
  user_points_record?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  /** 金积分余额 */
  gold_credit?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** 用户的会员类型 */
  member_type_id?: InputMaybe<Order_By>;
  /** 银积分余额 */
  silver_credit?: InputMaybe<Order_By>;
  user_ai_friends?: InputMaybe<Order_By>;
  user_characters?: InputMaybe<Order_By>;
  user_chats?: InputMaybe<Order_By>;
  user_drafts?: InputMaybe<Order_By>;
  user_member_orders?: InputMaybe<Order_By>;
  user_point_consumptions?: InputMaybe<Order_By>;
  user_points_record?: InputMaybe<Order_By>;
};
