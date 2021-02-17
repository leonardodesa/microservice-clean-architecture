import { Request, Response } from 'express'
import { Forecast } from '@src/services/forecast'
import { Beach } from '@src/models/beach';
import { Controller, Get } from '@overnightjs/core';

const forecast = new Forecast();

@Controller('forecast')
export class ForecastController {
  @Get('')
  public async getForecastForgetLoggedUser(_: Request, res: Response): Promise<void> {
    try {
      const beaches = await Beach.find({});
      const forecastData = await forecast.processForecastForBeaches(beaches);
      res.status(200).send(forecastData);
    } catch (error) {
      res.status(500).send({ error: 'Internal server error' })   
    }
  }
}
