import {Service, Inject} from "@tsed/common";
import {TradeLogs} from "../models/TradeLogs";
import {MongooseModel} from "@tsed/mongoose";

@Service()
export class TradeLogsService {
    @Inject(TradeLogs)
    private TradeLogs: MongooseModel<TradeLogs>;

    async save(tradeLog: TradeLogs): Promise<TradeLogs> {
        const model = new this.TradeLogs(tradeLog);
        await model.updateOne(tradeLog, {upsert: true});
        return model;
    }
}
