import {Model, ObjectID, PreHook} from "@tsed/mongoose";
import {Default, Format, IgnoreProperty, Property, PropertyName, Required} from "@tsed/common";

@Model()
export class TradeLogs {
    @IgnoreProperty()
    _id: string;

    @PropertyName("parent_account")
    @Required()
    parent_account: number;

    @PropertyName("child_account")
    @Required()
    child_account: number;

    @Property("volume")
    @Required()
    volume: number;

    @Format("date-time")
    @Default(Date.now)
    @Property("created_date")
    created_date: Date = new Date();
}
