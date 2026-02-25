#* Plumber API: load model and expose /predict and /health
#* TODO: Uncomment and adjust once model.rds exists.
# model <- readRDS("model.rds")

#* @get /health
function() {
  list(status = "ok", service = "r-api")
}

#* @post /predict
function(req, res) {
  body <- req$body
  # TODO: Validate body, call predict(model, newdata), return list(predictions = ...)
  list(predictions = numeric(0), message = "placeholder - implement prediction")
}
