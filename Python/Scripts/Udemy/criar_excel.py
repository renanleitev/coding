# Criando planilhas no Excel
import jpype
import asposecells
jpype.startJVM()
from asposecells.api import Workbook, FileFormatType


workbook = Workbook(FileFormatType.XLSX)
celula = workbook.getWorksheets().get(0).getCells()
celula.get("A1").putValue("Hello World")
workbook.save("output.xlsx")

jpype.shutdownJVM()
