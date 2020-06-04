import {BodyParams, Controller, Post, Status} from "@tsed/common";
import {TradeLogsService} from "../../services/TradeLogsService";
import {TradeLogs} from "../../models/TradeLogs";

@Controller("/tradeLogs")
export class TradeLogsController {
    constructor(private tradeLogsService: TradeLogsService) {
    }
    @Post("/")
    @Status(201, {description: "Created"})
    async save(@BodyParams() tradeLogs: TradeLogs): Promise<TradeLogs> {
        return this.tradeLogsService.save(tradeLogs);
    }
}
