using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GoWater.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace GoWater.API.Controllers
{
    [Route("api/[controller]")]
    public class SabespController : ControllerBase
    {
        public SabespController()
        {
        }

        [HttpGet("GetTodayReading")]
        public ActionResult<Readings> GetTodayReading()
        {
            var readings = new List<Readings>();

            var rnd = new Random();

            var Names = new List<string> { "Mangueira", "Banheiro", "Cozinha", "Maquina de Lavar", "Chuveiro", };

            foreach (var item in Names)
            {
                var reading = new Readings();
                reading.Name = item;
                reading.Value = rnd.Next(15, 250);
                readings.Add(reading);
            }

            return Ok(readings);
        }

        [HttpGet("GetWeekReadings")]
        public ActionResult<List<Readings>> GetWeekReadings()
        {

            var readings = new List<Readings>();
            var rnd = new Random();

            var Names = new List<string> { "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom" };

            foreach (var item in Names)
            {
                var reading = new Readings();
                reading.Name = item;
                reading.Value = rnd.Next(50, 90);
                readings.Add(reading);
            }

            return Ok(readings);
        }

        [HttpGet("GetMonthHistory")]
        public ActionResult<List<MonthHistory>> GetMonthHistory()
        {
            var readings = new List<MonthHistory>();
            var rnd = new Random();

            var Names = new List<string> { "JAN 22", "FEV 22", "MAR 22", "MAI 22", "JUN 22" };

            foreach (var item in Names)
            {
                var reading = new MonthHistory();
                reading.Name = item;
                reading.Litros = rnd.Next(1000, 2500);
                readings.Add(reading);
            }

            return Ok(readings);
        }

        [HttpGet("GetMonthAnalysis")]
        public ActionResult<List<Readings>> GetMonthAnalysis()
        {
            var readings = new List<Readings>();
            var rnd = new Random();

            var Names = new List<string> { "JAN 22", "FEV 22", "MAR 22", "MAI 22", "JUN 22" };

            foreach (var item in Names)
            {
                var reading = new Readings();
                reading.Name = item;
                reading.Value = rnd.Next(150, 600);
                readings.Add(reading);
            }

            return Ok(readings);
        }
    }
}